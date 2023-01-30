const Jimp = require("jimp");

const resizeImage = async (image, width, height) => {
  try {
    const resizeImage = await Jimp.read(image);
    resizeImage.resize(width, height);
    resizeImage.write(image);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = resizeImage;
