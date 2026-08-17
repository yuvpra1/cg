const fs = require('fs');
const path = require('path');

const replacements = {
  "'#f8fafc'": "'var(--card-bg-hover)'",
  "'#f1f5f9'": "'var(--card-bg-hover)'",
  "'#fffbeb'": "'var(--card-bg-hover)'",
  "'#e0f2fe'": "'var(--card-bg)'",
  "'#fef2f2'": "'var(--card-bg-hover)'",
  "'#e2e8f0'": "'var(--card-bg-hover)'",
  "'#c7d2fe'": "'var(--border-color)'",
  "'#fca5a5'": "'#ef4444'",
  "'#991b1b'": "'#ef4444'",
  "'#334155'": "'var(--text-main)'",
  "'#475569'": "'var(--text-main)'",
  "'#0284c7'": "'var(--color-primary)'",
  "'#0369a1'": "'var(--color-secondary)'",
  "border: '1px solid #e2e8f0'": "border: '1px solid var(--border-color)'",
  "background: '#0f172a'": "background: 'var(--color-primary)'"
};

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      for (const [search, replace] of Object.entries(replacements)) {
        if (content.includes(search)) {
          content = content.split(search).join(replace);
          changed = true;
        }
      }
      // specifically handle the case where color is not properly overridden in MCQ tags.
      // E.g., <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>{mcq.q}</p>
      // if background is card-bg-hover, text color should be var(--text-main)
      const mcqPRegex = /<p style=\{\{\s*fontWeight:\s*'bold',\s*marginBottom:\s*'10px'\s*\}\}>/g;
      if (mcqPRegex.test(content)) {
        content = content.replace(mcqPRegex, "<p style={{ fontWeight: 'bold', marginBottom: '10px', color: 'var(--text-main)' }}>");
        changed = true;
      }
      
      const mcqUlRegex = /<ul style=\{\{\s*listStyle:\s*'none',\s*padding:\s*0,\s*marginBottom:\s*'15px'\s*\}\}>/g;
      if (mcqUlRegex.test(content)) {
        content = content.replace(mcqUlRegex, "<ul style={{ listStyle: 'none', padding: 0, marginBottom: '15px', color: 'var(--text-main)' }}>");
        changed = true;
      }
      
      if (changed) {
        fs.writeFileSync(fullPath, content);
        console.log('Fixed', fullPath);
      }
    }
  }
}

processDir('app');
console.log('Done.');
