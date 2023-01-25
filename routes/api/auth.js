const express = require("express");

const ctrl = require("../../controllers/user");
const { ctrlWrapper } = require("../../helpers");
const { validateBody, authenticate } = require("../../middlewares");
const { schemasUser } = require("../../models");

const authRouter = express.Router();

authRouter.post(
  "/signup",
  validateBody(schemasUser.registerSchema),
  ctrlWrapper(ctrl.signup)
);

authRouter.post(
  "/login",
  validateBody(schemasUser.registerSchema),
  ctrlWrapper(ctrl.login)
);

authRouter.get("/current", authenticate, ctrl.getCurrent);

authRouter.get("/logout", authenticate, ctrl.logout);

authRouter.patch("/", authenticate, ctrlWrapper(ctrl.updateSubscription));

module.exports = authRouter;
