// generateImageData.js
const fs = require('fs');
const path = require('path');

const folder = 'public/images/common';
const output = 'public/imageData/common.json';

const files = fs.readdirSync(folder).filter(f => f.endsWith('.webp'));
const imagePaths = files.map(f => `/images/common/${f}`);

fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, JSON.stringify(imagePaths, null, 2));

console.log(`✅ Saved ${files.length} image paths to ${output}`);
