const { HttpError } = require("../../helpers");
const { Contact, schemasContact } = require("../../models");

const update = async (req, res, next) => {
  try {
    const { error } = schemasContact.addSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }

    const { contactId } = req.params;
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

module.exports = update;
