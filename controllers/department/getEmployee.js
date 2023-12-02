const Employees = require("../../models/Employee");

const getEmployee = async (req, res, next) => {
  try {
    const employees = await Employees.find({
      department: req.query.department,
    });
    res.json(employees);
  } catch (err) {
    console.error("Помилка при отриманні списку працівників:", err);
    next(err);
  }
};

module.exports = getEmployee;
