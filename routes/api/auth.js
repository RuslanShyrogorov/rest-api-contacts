const express = require("express");

const ctrl = require("../../controllers/user");
const { ctrlWrapper } = require("../../helpers");
const { validateBody, authenticate, upload } = require("../../middlewares");
const { schemasUser } = require("../../models");

const authRouter = express.Router();

authRouter.post(
  "/signup",
  validateBody(schemasUser.registerSchema),
  ctrlWrapper(ctrl.signup)
);

authRouter.get("/verify/:verificationToken", ctrlWrapper(ctrl.verify));

authRouter.post(
  "/verify",
  validateBody(schemasUser.emailSchema),
  ctrlWrapper(ctrl.recendVerifyEmail)
);

authRouter.post(
  "/login",
  validateBody(schemasUser.registerSchema),
  ctrlWrapper(ctrl.login)
);

authRouter.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent));

authRouter.get("/logout", authenticate, ctrlWrapper(ctrl.logout));

authRouter.patch("/", authenticate, ctrlWrapper(ctrl.updateSubscription));

authRouter.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrlWrapper(ctrl.updateAvatar)
);

module.exports = authRouter;
