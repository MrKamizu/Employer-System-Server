const Employees = require("../../models/Employee");

const get = async (req, res, next) => {
  try {
    const employees = await Employees.find().populate("department", "name");
    res.json(employees);
  } catch (err) {
    console.error("Помилка при отриманні списку працівників:", err);
    next(err);
  }
};

module.exports = get;
