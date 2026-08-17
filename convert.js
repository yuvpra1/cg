const sharp = require('sharp');
const fs = require('fs');

async function convert() {
  const images = [
    { in: 'छत्तीसगढ़ का प्रागैतिहासिक काल पाषाण काल, प्रमुख स्थल और शैलचित्र.png', out: 'public/images/chhattisgarh-prehistoric-period.webp' }
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
