const { HttpError } = require("../../helpers");
const { Contact, schemasContact } = require("../../models");

const updateFavorite = async (req, res, next) => {
  try {
    const { error } = schemasContact.updateFavoriteSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }

    const { contactId } = req.params;

    const result = await Contact.findByIdAndUpdate(contactId, req.body, {
      new: true,
    });

    if (Object.keys(req.body).length === 0) {
      throw HttpError(400, "missing field favorite");
    }

    if (!result) {
      throw HttpError(404, "Not found");
    }

    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = updateFavorite;
