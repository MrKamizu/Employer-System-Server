const Department = require("../../models/Department");
const { validationResult } = require("express-validator");
const validationHaldler = require("../../helpers/validationHaldler");

const add = async (req, res, next) => {
  try {
    const validation = validationResult(req);
    if (!validation.isEmpty()) throw validationHaldler(res, validation.array());

    const { name } = req.body;

    const department = await Department.create({
      name,
    });

    res.json(department);
  } catch (err) {
    // console.error("Помилка при додаванні працівника:", err);
    next(err);
  }
};

module.exports = add;
