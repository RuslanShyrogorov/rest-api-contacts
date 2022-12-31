const { contacts } = require("../../models");

const getAll = async (req, res, next) => {
  try {
    const result = await contacts.listContacts();

    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
