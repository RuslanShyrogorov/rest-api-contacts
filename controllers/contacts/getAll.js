const { Contact } = require("../../models");

const getAll = async (req, res, next) => {
  try {
    const { _id: owner } = req.user;

    const { page = 1, limit = 10, favorite } = req.query;
    const skip = (page - 1) * limit;

    const result = await Contact.find(
      { owner, favorite: favorite || [true, false] },
      "-createdAt -updatedAt",
      {
        skip,
        limit,
      }
    ); // skip - how many objects to skip, limit-how many objects on page

    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
