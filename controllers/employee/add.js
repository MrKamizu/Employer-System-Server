const Employees = require("../../models/Employee");
const { validationResult } = require("express-validator");
const validationHaldler = require("../../helpers/validationHaldler");

const add = async (req, res, next) => {
  try {
    const validation = validationResult(req);
    if (!validation.isEmpty()) throw validationHaldler(res, validation.array());

    const {
      firstname,
      lastname,
      position,
      salary,
      bonuses,
      contact,
      department,
    } = req.body;

    const employee = await Employees.create({
      firstname,
      lastname,
      position,
      salary,
      bonuses,
      contact,
      department,
    });

    res.json(employee);
  } catch (err) {
    // console.error("Помилка при додаванні працівника:", err);
    next(err);
  }
};

module.exports = add;
