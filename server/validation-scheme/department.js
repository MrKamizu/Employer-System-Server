const expressValidator = require("express-validator");

const add = [
  expressValidator.body("name").notEmpty(),
];

module.exports = {
  add,
};
