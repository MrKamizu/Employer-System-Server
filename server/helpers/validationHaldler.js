const { createError } = require("http-json-errors");

const validationHaldler = (_, arr) => {
  return createError(400, {
    body: {
      error_message: arr.map((err) => ({ field: err.path, msg: err.msg })),
    },
  });
};

module.exports = validationHaldler;
