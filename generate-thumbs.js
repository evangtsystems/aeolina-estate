const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const SOURCE_DIR = path.join(__dirname, 'public/images/common');
const OUTPUT_DIR = path.join(__dirname, 'public/thumbs/common');
const TARGET_WIDTH = 600;
const QUALITY = 85;

function ensureDirSync(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function processImage(filePath, outputFilePath) {
  return sharp(filePath)
    .resize({ width: TARGET_WIDTH })
    .webp({ quality: QUALITY })
    .toFile(outputFilePath)
    .then(() => console.log(`✅ Created: ${outputFilePath}`))
    .catch(err => console.error(`❌ Error: ${filePath}`, err));
}

function run() {
  const files = fs.readdirSync(SOURCE_DIR);

  for (const file of files) {
    if (!/\.(jpe?g|png|webp)$/i.test(file)) continue;

    const sourceFile = path.join(SOURCE_DIR, file);
    const outputFile = path.join(OUTPUT_DIR, file.replace(/\.[^.]+$/, '.webp'));

    ensureDirSync(OUTPUT_DIR);
    processImage(sourceFile, outputFile);
  }
}

run();
