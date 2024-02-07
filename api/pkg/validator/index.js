const { Validator } = require("node-input-validator");

const validate = async (data, rules) => {
  const validator = new Validator(data, rules);
  const validated = await validator.check();
  if (!validated) {
    throw validator.errors;
  }
};

module.exports = {
  validate,
};
