const Jimp = require("jimp");

const resizeAvatar = async (avatar) => {
  try {
    const resizeAvatar = await Jimp.read(avatar);
    resizeAvatar.resize(250, 250);
    resizeAvatar.write(avatar);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = resizeAvatar;
