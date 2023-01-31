const { User } = require("../../models");

const { HttpError, sendEmail } = require("../../helpers");

const recendVerifyEmail = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError(404, "Not found");
  }

  if (user.verify) {
    throw HttpError(400, "Verification has already been passed");
  }

  const verifyEmail = {
    to: email,
    subject: "Verify email",
    html: `<p>By clicking on the following link, you are confirming your email address.</p>\n
              <a target="_blank" href="${BASE_URL}/api/users/verify/${user.verificationToken}">Confirm email address</a>`,
  };

  await sendEmail(verifyEmail);

  res.json({
    message: "Verification email sent",
  });
};

module.exports = recendVerifyEmail;
