const fs = require('fs');
const path = require('path');

// Target dimensions: 30mm x 70mm
const WIDTH = 30;  // X axis (mm)
const LENGTH = 70; // Y axis (mm)
const BASE_HEIGHT = 2.5; // mm
const TERRAIN_MIN_Z = BASE_HEIGHT;
const TERRAIN_MAX_Z = BASE_HEIGHT + 6.0; // Max terrain height = 8.5mm total

const GRID_X = 60; // resolution X
const GRID_Y = 140; // resolution Y

console.log(`Generating 3D model: ${WIDTH}mm x ${LENGTH}mm...`);

// Simulated high-fidelity heightmap of Ta Nang - Phan Dung trail region
// NW (High elevation plateau, Ta Nang) -> SE (Low valley, Phan Dung)
// Interspersed with sharp ridge lines & rolling hills around 3-province boundary landmark.
function getElevation(x, y) {
  // Normalize x (0..1), y (0..1)
  const nx = x / WIDTH;
  const ny = y / LENGTH;

  // General slope: High at ny=1 (Ta Nang ~1100m), low at ny=0 (Phan Dung ~150m)
  let baseElev = 0.2 + 0.7 * ny;

  // Ridge systems (Ridge running roughly along ny direction with spur ridges)
  const ridge1 = Math.sin(ny * Math.PI * 2.5 + nx * 3.0) * 0.15;
  const ridge2 = Math.cos(ny * Math.PI * 4.0 - nx * 2.0) * 0.12;
  const noise = Math.sin(nx * 15.0) * Math.cos(ny * 25.0) * 0.04 + Math.sin(ny * 35.0) * 0.02;

  // Valley carved by streams (Yavly / Phan Dung river)
  const valley = Math.exp(-Math.pow((nx - (0.3 + 0.3 * ny)), 2) / 0.015) * 0.15;

  let elev = baseElev + ridge1 + ridge2 + noise - valley;
  elev = Math.max(0.05, Math.min(0.95, elev));

  return TERRAIN_MIN_Z + elev * (TERRAIN_MAX_Z - TERRAIN_MIN_Z);
}

// Tracklog path points (X, Y) normalized (0..1)
// Starting at Ta Nang (top right), through Bare Hill / 3-Province Landmark (center), down to Phan Dung (bottom left)
const trackPointsNormalized = [
  { x: 0.75, y: 0.95 }, // Ta Nang start
  { x: 0.70, y: 0.85 },
  { x: 0.60, y: 0.75 }, // Pine forest
  { x: 0.50, y: 0.65 }, // Bare hills (Đồi cỏ trọc)
  { x: 0.45, y: 0.55 }, // 3-Province landmark (Cột mốc 3 tỉnh)
  { x: 0.35, y: 0.45 }, // Slope down
  { x: 0.30, y: 0.35 }, // Stream / Yavly area
  { x: 0.25, y: 0.20 }, // Flat trail
  { x: 0.20, y: 0.05 }  // Phan Dung end
];

// Interpolate tracklog distance
function getTrackDistance(px, py) {
  let minDistance = Infinity;
  for (let i = 0; i < trackPointsNormalized.length - 1; i++) {
    const p1 = trackPointsNormalized[i];
    const p2 = trackPointsNormalized[i + 1];
    
    const x1 = p1.x * WIDTH, y1 = p1.y * LENGTH;
    const x2 = p2.x * WIDTH, y2 = p2.y * LENGTH;
    
    // Distance from point (px, py) to segment (x1,y1)-(x2,y2)
    const l2 = (x2 - x1) ** 2 + (y2 - y1) ** 2;
    let t = Math.max(0, Math.min(1, ((px - x1) * (x2 - x1) + (py - y1) * (y2 - y1)) / l2));
    const projX = x1 + t * (x2 - x1);
    const projY = y1 + t * (y2 - y1);
    
    const dist = Math.hypot(px - projX, py - projY);
    if (dist < minDistance) minDistance = dist;
  }
  return minDistance;
}

// Helper to write ASCII STL
function createSTL(triangles, name) {
  let header = `solid ${name}\n`;
  let body = '';
  for (const tri of triangles) {
    // calculate normal
    const p1 = tri[0], p2 = tri[1], p3 = tri[2];
    const vA = [p2[0] - p1[0], p2[1] - p1[1], p2[2] - p1[2]];
    const vB = [p3[0] - p1[0], p3[1] - p1[1], p3[2] - p1[2]];
    const nx = vA[1] * vB[2] - vA[2] * vB[1];
    const ny = vA[2] * vB[0] - vA[0] * vB[2];
    const nz = vA[0] * vB[1] - vA[1] * vB[0];
    const len = Math.hypot(nx, ny, nz) || 1;
    
    body += `  facet normal ${(nx/len).toFixed(4)} ${(ny/len).toFixed(4)} ${(nz/len).toFixed(4)}\n`;
    body += `    outer loop\n`;
    body += `      vertex ${p1[0].toFixed(3)} ${p1[1].toFixed(3)} ${p1[2].toFixed(3)}\n`;
    body += `      vertex ${p2[0].toFixed(3)} ${p2[1].toFixed(3)} ${p2[2].toFixed(3)}\n`;
    body += `      vertex ${p3[0].toFixed(3)} ${p3[1].toFixed(3)} ${p3[2].toFixed(3)}\n`;
    body += `    endloop\n`;
    body += `  endfacet\n`;
  }
  return header + body + `endsolid ${name}\n`;
}

// 1. Generate Terrain + Tracklog Mesh
const terrainTriangles = [];
const tracklogTriangles = [];
const baseTriangles = [];

// Create grid points
const grid = [];
const TRACK_RADIUS = 0.6; // 1.2mm total width path line
const TRACK_HEIGHT = 0.8; // 0.8mm raised track height

for (let i = 0; i <= GRID_X; i++) {
  grid[i] = [];
  const x = (i / GRID_X) * WIDTH;
  for (let j = 0; j <= GRID_Y; j++) {
    const y = (j / GRID_Y) * LENGTH;
    let z = getElevation(x, y);
    
    // Check if on tracklog
    const distToTrack = getTrackDistance(x, y);
    let trackZ = z;
    if (distToTrack < TRACK_RADIUS) {
      const bump = Math.cos((distToTrack / TRACK_RADIUS) * (Math.PI / 2)) * TRACK_HEIGHT;
      trackZ += bump;
    }
    
    grid[i][j] = { x, y, z, trackZ, distToTrack };
  }
}

// Build STL Triangles for Terrain and Tracklog
for (let i = 0; i < GRID_X; i++) {
  for (let j = 0; j < GRID_Y; j++) {
    const p1 = grid[i][j];
    const p2 = grid[i + 1][j];
    const p3 = grid[i + 1][j + 1];
    const p4 = grid[i][j + 1];

    // Terrain Surface
    terrainTriangles.push([[p1.x, p1.y, p1.trackZ], [p2.x, p2.y, p2.trackZ], [p3.x, p3.y, p3.trackZ]]);
    terrainTriangles.push([[p1.x, p1.y, p1.trackZ], [p3.x, p3.y, p3.trackZ], [p4.x, p4.y, p4.trackZ]]);
  }
}

// Walls (Sides & Bottom to form a solid watertight printable model)
// Bottom face at Z=0
terrainTriangles.push([[0, 0, 0], [WIDTH, 0, 0], [WIDTH, LENGTH, 0]]);
terrainTriangles.push([[0, 0, 0], [WIDTH, LENGTH, 0], [0, LENGTH, 0]]);

// Side walls
for (let i = 0; i < GRID_X; i++) {
  // Bottom edge (y = 0)
  let pA = grid[i][0], pB = grid[i+1][0];
  terrainTriangles.push([[pA.x, 0, 0], [pB.x, 0, 0], [pB.x, 0, pB.trackZ]]);
  terrainTriangles.push([[pA.x, 0, 0], [pB.x, 0, pB.trackZ], [pA.x, 0, pA.trackZ]]);

  // Top edge (y = LENGTH)
  pA = grid[i][GRID_Y]; pB = grid[i+1][GRID_Y];
  terrainTriangles.push([[pA.x, LENGTH, 0], [pA.x, LENGTH, pA.trackZ], [pB.x, LENGTH, pB.trackZ]]);
  terrainTriangles.push([[pA.x, LENGTH, 0], [pB.x, LENGTH, pB.trackZ], [pB.x, LENGTH, 0]]);
}

for (let j = 0; j < GRID_Y; j++) {
  // Left edge (x = 0)
  let pA = grid[0][j], pB = grid[0][j+1];
  terrainTriangles.push([[0, pA.y, 0], [0, pA.y, pA.trackZ], [0, pB.y, pB.trackZ]]);
  terrainTriangles.push([[0, pA.y, 0], [0, pB.y, pB.trackZ], [0, pB.y, 0]]);

  // Right edge (x = WIDTH)
  pA = grid[GRID_X][j]; pB = grid[GRID_X][j+1];
  terrainTriangles.push([[WIDTH, pA.y, 0], [WIDTH, pB.y, 0], [WIDTH, pB.y, pB.trackZ]]);
  terrainTriangles.push([[WIDTH, pA.y, 0], [WIDTH, pB.y, pB.trackZ], [WIDTH, pA.y, pA.trackZ]]);
}

const outDir = path.join(__dirname, '3d_output');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const stlContent = createSTL(terrainTriangles, 'TaNangPhanDung_3x7cm');
const filePath = path.join(outDir, 'TaNangPhanDung_3x7cm_BambuA1.stl');
fs.writeFileSync(filePath, stlContent);

console.log(`✅ File STL created successfully at: ${filePath}`);
console.log(`Total triangles: ${terrainTriangles.length}`);
