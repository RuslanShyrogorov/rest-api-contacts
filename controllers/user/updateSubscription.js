const { User } = require("../../models");

const { HttpError } = require("../../helpers");

// const updateSubscription = async (req, res, next) => {
//   try {
//     const { _id } = req.user;

//     const result = await User.findByIdAndUpdate(_id, req.body, {
//       new: true,
//     });

//     if (!result) {
//       throw HttpError(404, "Not found");
//     }

//     if (Object.keys(req.body).length === 0) {
//       throw HttpError(400, "missing field subscription");
//     }

//     res.json({
//       user: {
//         email: result.email,
//         subscription: result.subscription,
//       },
//     });
//   } catch (error) {
//     next(error);
//   }
// };

const updateSubscription = async (req, res) => {
  const { _id } = req.user;

  const result = await User.findByIdAndUpdate(_id, req.body, {
    new: true,
  });

  if (!result) {
    throw HttpError(404, "Not found");
  }

  if (Object.keys(req.body).length === 0) {
    throw HttpError(400, "missing field subscription");
  }

  res.json({
    user: {
      email: result.email,
      subscription: result.subscription,
    },
  });
};

module.exports = updateSubscription;
