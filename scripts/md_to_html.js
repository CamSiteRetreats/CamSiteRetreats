const fs = require('fs');
const path = require('path');

function parseMarkdown(md) {
    let html = md;
    
    // Escape HTML special chars first to prevent parsing issues
    html = html
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

    // Restore escaped brackets for file links and image markdown
    html = html
        .replace(/&lt;!--/g, '<!--')
        .replace(/--&gt;/g, '-->');

    // Parse mermaid blocks (hide them in print or represent them simply)
    html = html.replace(/```mermaid([\s\S]*?)```/g, (match, code) => {
        return `<div class="bg-orange-50 border border-orange-200 p-4 rounded-xl my-4 italic text-sm text-orange-800">
            [Sơ đồ quy trình: ${code.trim()}]
        </div>`;
    });

    // Parse code blocks
    html = html.replace(/```([\s\S]*?)```/g, '<pre class="bg-gray-50 border border-gray-200 p-4 rounded-xl my-4 text-xs overflow-x-auto"><code>$1</code></pre>');

    // Parse headers
    html = html.replace(/^# (.*?)$/gm, '<h1 class="text-3xl font-black text-orange-600 border-b-2 border-orange-100 pb-3 mt-8 mb-4">$1</h1>');
    html = html.replace(/^## (.*?)$/gm, '<h2 class="text-2xl font-bold text-gray-800 border-b border-gray-100 pb-2 mt-6 mb-3">$1</h2>');
    html = html.replace(/^### (.*?)$/gm, '<h3 class="text-xl font-bold text-orange-600 mt-5 mb-2">$1</h3>');
    html = html.replace(/^#### (.*?)$/gm, '<h4 class="text-lg font-bold text-gray-700 mt-4 mb-1">$1</h4>');

    // Parse Alerts: > [!IMPORTANT] or > [!TIP] or > [!NOTE]
    html = html.replace(/^&gt;\s*\[!(IMPORTANT|WARNING|CAUTION|TIP|NOTE)\]\s*\n&gt;\s*(.*?)$/gm, (match, type, text) => {
        let bgClass = 'bg-blue-50 border-blue-200 text-blue-800';
        if (type === 'IMPORTANT' || type === 'WARNING') bgClass = 'bg-red-50 border-red-200 text-red-800';
        if (type === 'TIP') bgClass = 'bg-green-50 border-green-200 text-green-800';
        return `<div class="border-l-4 p-4 rounded-r-xl my-4 ${bgClass}"><strong>[${type}]</strong> ${text}</div>`;
    });

    // Parse regular blockquotes
    html = html.replace(/^&gt;\s*(.*?)$/gm, '<blockquote class="border-l-4 border-orange-500 pl-4 italic my-4 text-gray-600">$1</blockquote>');

    // Parse horizontal rules
    html = html.replace(/^---$/gm, '<hr class="my-6 border-gray-200">');

    // Parse tables
    // Match tables with headers, separator, and rows
    const tableRegex = /((?:\|[^\n]+\|\r?\n)+)/g;
    html = html.replace(tableRegex, (match) => {
        const lines = match.trim().split('\n');
        if (lines.length < 2) return match;
        
        let tableHtml = '<div class="overflow-x-auto my-6"><table class="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden">';
        
        // Parse header
        const headers = lines[0].split('|').map(s => s.trim()).filter((s, i) => i > 0 && i < lines[0].split('|').length - 1);
        tableHtml += '<thead class="bg-orange-50"><tr>';
        headers.forEach(h => {
            tableHtml += `<th class="px-4 py-3 text-left text-xs font-bold text-orange-800 uppercase tracking-wider">${h}</th>`;
        });
        tableHtml += '</tr></thead><tbody class="bg-white divide-y divide-gray-200">';
        
        // Parse body rows (skip the separator line 1)
        for (let i = 2; i < lines.length; i++) {
            const cells = lines[i].split('|').map(s => s.trim()).filter((s, idx) => idx > 0 && idx < lines[i].split('|').length - 1);
            tableHtml += '<tr>';
            cells.forEach(c => {
                tableHtml += `<td class="px-4 py-3 text-sm text-gray-600">${c}</td>`;
            });
            tableHtml += '</tr>';
        }
        
        tableHtml += '</tbody></table></div>';
        return tableHtml;
    });

    // Parse lists
    // Unordered lists
    html = html.replace(/^\*\s*(.*?)$/gm, '<li class="list-disc ml-6 my-1 text-gray-700">$1</li>');
    html = html.replace(/^-\s*\[\s*\]\s*(.*?)$/gm, '<li class="list-none flex items-center gap-2 my-1 text-gray-700"><input type="checkbox" disabled class="rounded border-gray-300 text-orange-600 focus:ring-orange-500"> <span>$1</span></li>');
    html = html.replace(/^-\s*\[\s*x\s*\]\s*(.*?)$/gm, '<li class="list-none flex items-center gap-2 my-1 text-gray-700"><input type="checkbox" checked disabled class="rounded border-gray-300 text-orange-600 focus:ring-orange-500"> <span class="line-through text-gray-400">$1</span></li>');
    html = html.replace(/^-\s*(.*?)$/gm, '<li class="list-disc ml-6 my-1 text-gray-700">$1</li>');

    // Group adjacent <li> tags inside <ul> tags
    // Matches block of li tags and wraps them in <ul>
    html = html.replace(/((?:<li[\s\S]*?<\/li>\s*)+)/g, '<ul class="my-4 space-y-1">$1</ul>');

    // Parse bold, italics, links
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-gray-900">$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');
    
    // File and HTTP links
    html = html.replace(/\[([^\]]+)\]\(file:\/\/\/([^)]+)\)/g, '<a href="file:///$2" class="text-orange-600 hover:underline font-semibold">$1</a>');
    html = html.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2" target="_blank" class="text-orange-600 hover:underline font-semibold">$1</a>');

    // Clean up empty paragraphs and format line breaks
    const paragraphs = html.split('\n\n');
    html = paragraphs.map(p => {
        p = p.trim();
        if (!p) return '';
        if (p.startsWith('<h') || p.startsWith('<ul') || p.startsWith('<div') || p.startsWith('<blockquote') || p.startsWith('<pre') || p.startsWith('<hr') || p.startsWith('<table')) {
            return p;
        }
        return `<p class="my-4 text-gray-700 leading-relaxed">${p}</p>`;
    }).join('\n');

    return html;
}

function convertFile(filePath, titleName) {
    if (!fs.existsSync(filePath)) {
        console.error(`File not found: ${filePath}`);
        return;
    }
    
    const md = fs.readFileSync(filePath, 'utf8');
    const parsedHtml = parseMarkdown(md);
    
    const htmlTemplate = `<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${titleName}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Montserrat', sans-serif;
        }
        @media print {
            .no-print {
                display: none !important;
            }
            body {
                background: white !important;
                color: black !important;
                font-size: 12pt;
            }
            .print-container {
                box-shadow: none !important;
                border: none !important;
                padding: 0 !important;
                margin: 0 !important;
                max-width: 100% !important;
            }
        }
    </style>
</head>
<body class="bg-gray-100 min-h-screen py-10 px-4">
    <!-- Action Bar -->
    <div class="max-w-4xl mx-auto mb-6 no-print flex justify-between items-center bg-white p-4 rounded-2xl shadow-sm border border-gray-200">
        <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-green-500 animate-ping"></span>
            <span class="text-sm font-semibold text-gray-600">Đã xuất bản tài liệu HTML chuẩn PDF</span>
        </div>
        <button onclick="window.print()" class="bg-orange-600 hover:bg-orange-700 text-white text-sm font-bold px-6 py-2.5 rounded-xl shadow-md transition-all flex items-center gap-2">
            🖨️ In tài liệu / Lưu PDF
        </button>
    </div>

    <!-- Main Document -->
    <div class="print-container max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-200">
        <div class="flex justify-between items-center mb-8 border-b-2 border-orange-500 pb-4">
            <div>
                <span class="text-xs font-black tracking-widest text-orange-600 uppercase">Tài liệu nội bộ</span>
                <h4 class="text-lg font-bold text-gray-800 mt-1">CAM SITE RETREATS</h4>
            </div>
            <span class="text-xs text-gray-400 font-medium">Cập nhật: ${new Date().toLocaleDateString('vi-VN')}</span>
        </div>

        <div class="prose max-w-none">
            ${parsedHtml}
        </div>
        
        <div class="mt-12 pt-6 border-t border-gray-100 text-center text-xs text-gray-400">
            © ${new Date().getFullYear()} CAM SITE RETREATS. Bảo lưu mọi quyền đối tác và nội bộ.
        </div>
    </div>
</body>
</html>
`;

    const destPath = filePath.replace('.md', '.html');
    fs.writeFileSync(destPath, htmlTemplate, 'utf8');
    console.log(`✅ Converted markdown to HTML at: ${destPath}`);
}

const mdFile = process.argv[2];
const title = process.argv[3] || 'Tài liệu CAM SITE RETREATS';

if (!mdFile) {
    console.error("Please specify a markdown file path");
    process.exit(1);
}

convertFile(mdFile, title);
