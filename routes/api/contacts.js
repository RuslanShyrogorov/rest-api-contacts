const express = require("express");
const contactsRouter = express.Router();

const ctrl = require("../../controllers/contacts");
const { validateBody, isValidId, authenticate } = require("../../middlewares");
const { schemasContact } = require("../../models");

contactsRouter.get("/", authenticate, ctrl.getAll);

contactsRouter.get("/:contactId", authenticate, isValidId, ctrl.getById);

contactsRouter.post(
  "/",
  authenticate,
  validateBody(schemasContact.addSchema),
  ctrl.add
);

contactsRouter.delete("/:contactId", authenticate, isValidId, ctrl.remove);

contactsRouter.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(schemasContact.addSchema),
  ctrl.update
);

contactsRouter.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(schemasContact.updateFavoriteSchema),
  ctrl.updateFavorite
);

module.exports = contactsRouter;
