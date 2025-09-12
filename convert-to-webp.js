// convert-to-webp.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputRoot = path.join(__dirname, 'public', 'images');

function convertDir(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const inputPath = path.join(dir, file);
    const stat = fs.statSync(inputPath);

    if (stat.isDirectory()) {
      // recurse into subfolder
      convertDir(inputPath);
    } else {
      const ext = path.extname(file).toLowerCase();
      const name = path.basename(file, ext);
      const outputPath = path.join(dir, `${name}.webp`);

      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        sharp(inputPath)
          .webp({ quality: 85 })
          .toFile(outputPath)
          .then(() => console.log(`✅ Converted: ${inputPath} → ${outputPath}`))
          .catch((err) => console.error(`❌ Failed to convert ${inputPath}:`, err));
      }
    }
  });
}

// start from images root
convertDir(inputRoot);
