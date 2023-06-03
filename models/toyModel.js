const mongoose = require("mongoose");
const Joi = require("joi");

const ToysSchema = new mongoose.Schema({
  name: String,
  info: String,
  category: String,
  img_url: String,
  price: Number,
  date: {
    type: Date, default: Date.now()
  },
  user_id: String
})

exports.ToysModel = mongoose.model("toys", ToysSchema);

exports.validateToy = (_reqBody) => {
  let schemaJoi = Joi.object({
    name: Joi.string().min(2).max(99).required(),
    info: Joi.string().min(2).max(99).required(),
    category: Joi.string().min(2).max(99).required(),
    img_url: Joi.string().min(2).max(300000).required(),
    price: Joi.number().min(1).max(1000).required()
  })
  return schemaJoi.validate(_reqBody)
}
