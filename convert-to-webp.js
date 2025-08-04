const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const inputDir = 'C:/Users/evangelos.lampos/villa-aeolina/public/images/common';

fs.readdir(inputDir, (err, files) => {
  if (err) {
    console.error('❌ Failed to read directory:', err);
    return;
  }

  if (files.length === 0) {
    console.log('⚠️ No files found in the folder.');
    return;
  }

  console.log(`🔍 Found ${files.length} files. Checking for .jpg/.jpeg...`);

  files.forEach((file) => {
    const ext = path.extname(file).toLowerCase(); // normalize casing
    const name = path.basename(file, ext);

    if (ext === '.jpg' || ext === '.jpeg') {
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(inputDir, `${name}.webp`);

      sharp(inputPath)
        .toFormat('webp')
        .toFile(outputPath)
        .then(() => console.log(`✅ Converted: ${file} → ${name}.webp`))
        .catch(err => console.error(`❌ Error converting ${file}:`, err));
    } else {
      console.log(`⏩ Skipped (not JPG): ${file}`);
    }
  });
});

