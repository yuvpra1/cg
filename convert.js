const sharp = require('sharp');
const fs = require('fs');

async function convert() {
  const images = [
    { in: 'cg-current-affairs-june-july-2026.png', out: 'public/images/cg-current-affairs-june-july-2026.webp' }
  ];

  if (!fs.existsSync('public/images')) {
    fs.mkdirSync('public/images', { recursive: true });
  }

  for (const img of images) {
    if (fs.existsSync(img.in)) {
      console.log(`Converting ${img.in}...`);
      await sharp(img.in).webp({ quality: 80 }).toFile(img.out);
      console.log(`Saved ${img.out}`);
      // Remove original PNG
      fs.unlinkSync(img.in);
      console.log(`Deleted ${img.in}`);
    } else {
      console.error(`File not found: ${img.in}`);
    }
  }
}

convert().catch(console.error);
