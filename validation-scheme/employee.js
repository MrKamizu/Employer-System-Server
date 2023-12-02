const expressValidator = require("express-validator");

const add = [
  expressValidator.body("firstname").notEmpty(),
  expressValidator.body("lastname").notEmpty(),
  expressValidator.body("position").notEmpty(),
  expressValidator.body("salary").notEmpty(),
];

module.exports = {
  add,
};
