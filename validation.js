const Joi = require("joi");

const ValidateRegister = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });

  return schema.validate(data);
};

const ValidateLogin = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required(),
    password: Joi.string().min(6).required(),
  });

  return schema.validate(data);
};

module.exports.ValidateRegister = ValidateRegister;
module.exports.ValidateLogin = ValidateLogin;