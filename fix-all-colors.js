const fs = require('fs');
const path = require('path');

const replacements = [
  // Backgrounds
  { regex: /(?:background|backgroundColor):\s*['"]#(?:ffffff|fffbe8|e0e7ff|fee2e2|f0f9ff|eff6ff|fff3cd|f8fafc|f1f5f9|fffbeb|e0f2fe|fef2f2|e2e8f0)['"]/gi, replace: "background: 'var(--card-bg)'" },
  
  // Specific border colors
  { regex: /borderColor:\s*['"]#(?:fca5a5|ef4444|bae6fd|bfdbfe|e2e8f0)['"]/gi, replace: "borderColor: 'var(--border-color)'" },
  { regex: /border(?:Left|Right|Top|Bottom)?:\s*['"]\d+px\s+solid\s+#(?:fca5a5|ef4444|bae6fd|bfdbfe|e2e8f0|f59e0b|8b5cf6|ffc107|bfdbfe)['"]/gi, replace: "border: '1px solid var(--border-color)'" },
  { regex: /border(?:Left)?:\s*['"]4px\s+solid\s+#(?:f59e0b|8b5cf6|ffc107|bfdbfe|fbbf24)['"]/gi, replace: "borderLeft: '4px solid var(--color-primary)'" },

  // Text colors
  { regex: /color:\s*['"]#(?:b91c1c|ef4444|dc3545)['"]/gi, replace: "color: '#ef4444'" }, // Errors -> Red
  { regex: /color:\s*['"]#(?:1e293b|334155|475569|111827|000000|0f172a)['"]/gi, replace: "color: 'var(--text-main)'" }, // Dark grays -> Light grays
  { regex: /color:\s*['"]#(?:d97706|856404|8b5cf6|16a34a)['"]/gi, replace: "color: 'var(--color-primary)'" } // Accents -> Primary
];

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      
      for (const {regex, replace} of replacements) {
        if (regex.test(content)) {
          content = content.replace(regex, replace);
          changed = true;
        }
      }
      
      // Additional specific fixes for MCQ lists to ensure text color is visible
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
