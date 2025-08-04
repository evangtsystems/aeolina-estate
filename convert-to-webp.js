// convert-to-webp.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'public', 'images', 'slider');

fs.readdirSync(inputDir).forEach((file) => {
  const ext = path.extname(file).toLowerCase();
  const name = path.basename(file, ext);
  const inputPath = path.join(inputDir, file);
  const outputPath = path.join(inputDir, `${name}.webp`);

  if (['.jpg', '.jpeg', '.png'].includes(ext)) {
    sharp(inputPath)
      .webp({ quality: 85 })
      .toFile(outputPath)
      .then(() => console.log(`✅ Converted: ${file} → ${name}.webp`))
      .catch((err) => console.error(`❌ Failed to convert ${file}:`, err));
  }
});
