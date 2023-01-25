// const { contacts } = require("../../models");
const { HttpError } = require("../../helpers");
const { schemasContact } = require("../../models");

const { Contact } = require("../../models");

// const add = async (req, res, next) => {
//   try {
//     const { error } = schemasContact.addSchema.validate(req.body);
//     if (error) {
//       throw HttpError(400, error.message);
//     }

//     const { _id: owner } = req.user;
//     const result = await Contact.create({ ...req.body, owner });

//     res.status(201).json(result);
//   } catch (error) {
//     next(error);
//   }
// };

const add = async (req, res) => {
  const { error } = schemasContact.addSchema.validate(req.body);
  if (error) {
    throw HttpError(400, error.message);
  }

  const { _id: owner } = req.user;
  const result = await Contact.create({ ...req.body, owner });

  res.status(201).json(result);
};

module.exports = add;
