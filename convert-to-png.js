const sharp = require("sharp");
const path = require("path");

const inputFile = "./public/images/common/AEOLINA COLLECTION.jpeg";

const outputFile = path.join(
  path.dirname(inputFile),
  path.basename(inputFile, path.extname(inputFile)) + ".png"
);

sharp(inputFile)
  .resize({
    width: 4000, // upscale for higher print quality
    withoutEnlargement: false,
  })
  .png({
    compressionLevel: 0, // maximum quality
    adaptiveFiltering: false,
    force: true,
  })
  .sharpen({
    sigma: 1.2,
    m1: 1,
    m2: 2,
  })
  .toFile(outputFile)
  .then(() => {
    console.log(`High-quality PNG created: ${outputFile}`);
  })
  .catch((err) => {
    console.error("Conversion failed:", err.message);
  });