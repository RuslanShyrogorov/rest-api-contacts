const Jimp = require("jimp");

const resizeAvatar = async (avatar) => {
  const resizeAvatar = await Jimp.read(avatar);
  resizeAvatar.resize(250, 250);
  resizeAvatar.write(avatar);
};

module.exports = resizeAvatar;
