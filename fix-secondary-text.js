const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes("var(--color-secondary)")) {
        // Change color: 'var(--color-secondary)' to color: 'var(--color-primary)' for better visibility on white backgrounds
        content = content.replace(/color:\s*['"]var\(--color-secondary\)['"]/g, "color: 'var(--color-primary)'");
        fs.writeFileSync(fullPath, content);
        console.log('Fixed', fullPath);
      }
    }
  }
}

processDir('app');
console.log('Done.');
