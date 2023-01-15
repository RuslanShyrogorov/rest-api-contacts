const { HttpError } = require("../../helpers");
const { Contact, schemas } = require("../../models");

const updateFavorite = async (req, res, next) => {
  try {
    const { error } = schemas.updateFavoriteSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }

    const { contactId } = req.params;

    console.log("req.body.favorite: ", req.body.favorite);
    console.log("req.body: ", req.body);

    if (req.body.favorite === undefined) {
      throw HttpError(400, "message: missing field favorite");
    }

    const result = await Contact.findByIdAndUpdate(contactId, req.body, {
      new: true,
    });

    if (!result) {
      throw HttpError(404, "Not found");
    }

    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = updateFavorite;
