const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../helpers");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

contactSchema.post("save", handleMongooseError); // handle errors from mongoose validation

const addSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string(),
  phone: Joi.string(),
  favorite: Joi.boolean(),
  owner: Joi.string(),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean(),
});

const schemasContact = {
  addSchema,
  updateFavoriteSchema,
};

const Contact = model("contact", contactSchema);

module.exports = {
  Contact,
  schemasContact,
};
