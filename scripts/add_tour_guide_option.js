const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'admin', 'src', 'pages', 'Users.js');
let content = fs.readFileSync(filePath, 'utf8');

// Find the exact bytes around the target
const searchFor = '<option value="admin">Admin</option>';
const idx = content.indexOf(searchFor);

if (idx === -1) {
    console.log('ERROR: Could not find target string');
    process.exit(1);
}

// Check what's after the Admin option
const after = content.substring(idx + searchFor.length, idx + searchFor.length + 100);
console.log('After admin option:', JSON.stringify(after));

// Find the closing </select> right after Admin
const closeSelectIdx = content.indexOf('</select>', idx);
const beforeClose = content.substring(idx + searchFor.length, closeSelectIdx);
console.log('Between admin and close select:', JSON.stringify(beforeClose));

// Check if tour_guide already in this dropdown
if (content.substring(idx, closeSelectIdx).includes('tour_guide')) {
    console.log('tour_guide already in dropdown!');
    process.exit(0);
}

// Insert tour_guide before </select>
const tourGuideOption = '\r\n                               <option value="tour_guide">\uD83E\uDDED Tour Guide (HDV)</option>';
const newContent = content.substring(0, closeSelectIdx) + tourGuideOption + '\r\n                           </select>' + content.substring(closeSelectIdx + '</select>'.length);

fs.writeFileSync(filePath, newContent, 'utf8');

// Verify
const verify = fs.readFileSync(filePath, 'utf8');
const found = verify.includes('value="tour_guide"');
console.log('tour_guide in dropdown now:', found);
if (!found) {
    console.log('FAILED - showing context:');
    const i = verify.indexOf('userRole');
    console.log(verify.substring(i, i + 300));
}
