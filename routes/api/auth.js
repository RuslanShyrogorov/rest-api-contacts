const express = require("express");

const ctrl = require("../../controllers/user");

const { validateBody, authenticate } = require("../../middlewares");
const { schemasUser } = require("../../models");

const authRouter = express.Router();

authRouter.post(
  "/signup",
  validateBody(schemasUser.registerSchema),
  ctrl.signup
);

authRouter.post("/login", validateBody(schemasUser.registerSchema), ctrl.login);

authRouter.get("/current", authenticate, ctrl.getCurrent);

authRouter.get("/logout", authenticate, ctrl.logout);

authRouter.patch("/", authenticate, ctrl.updateSubscription);

module.exports = authRouter;
