const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let newContent = content
      .replace(/CG Knowledge Portal/g, 'CGSSB')
      .replace(/CG Knowledge/g, 'CGSSB')
      .replace(/cgknowledge\.in/g, 'cgssb.com.in');
    
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Updated: ${filePath}`);
    }
  } catch(e) {
    console.error(`Error in ${filePath}:`, e.message);
  }
}

const filesToUpdate = [
  'app/(tools)/tools/age-calculator/page.tsx',
  'app/(tools)/tools/image-to-pdf/page.tsx',
  'app/(tools)/tools/page.tsx',
  'app/(tools)/tools/percentage-calculator/page.tsx',
  'app/(tools)/tools/photo-resizer/page.tsx',
  'app/(tools)/tools/typing-test/page.tsx',
  'app/about-us/page.tsx',
  'app/disclaimer/page.tsx',
  'app/layout.tsx',
  'app/privacy-policy/page.tsx',
  'app/terms/page.tsx',
  'components/Navbar.tsx'
];

filesToUpdate.forEach(file => {
  const fullPath = path.join(__dirname, file);
  replaceInFile(fullPath);
});
