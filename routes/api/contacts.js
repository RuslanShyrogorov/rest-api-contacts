const express = require("express");
const contactsRouter = express.Router();

const ctrl = require("../../controllers/contacts");
const { ctrlWrapper } = require("../../helpers");
const { validateBody, isValidId, authenticate } = require("../../middlewares");
const { schemasContact } = require("../../models");

contactsRouter.get("/", authenticate, ctrlWrapper(ctrl.getAll));

contactsRouter.get(
  "/:contactId",
  authenticate,
  isValidId,
  ctrlWrapper(ctrl.getById)
);

contactsRouter.post(
  "/",
  authenticate,
  validateBody(schemasContact.addSchema),
  // ctrl.add
  ctrlWrapper(ctrl.add)
);

contactsRouter.delete("/:contactId", authenticate, isValidId, ctrl.remove);

contactsRouter.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(schemasContact.addSchema),
  ctrlWrapper(ctrl.update)
);

contactsRouter.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(schemasContact.updateFavoriteSchema),
  ctrlWrapper(ctrl.updateFavorite)
);

module.exports = contactsRouter;
