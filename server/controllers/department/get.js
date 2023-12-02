const Department = require("../../models/Department");

const get = async (req, res, next) => {
  try {
    const department = await Department.find();
    res.json(department);
  } catch (err) {
    console.error("Помилка при отриманні списку працівників:", err);
    next(err);
  }
};

module.exports = get;
