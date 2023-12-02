const del = async (req, res, next) => {
  try {
    res.json({ type: "Delete" });
  } catch (err) {
    console.error("Помилка при отриманні списку працівників:", err);
    next(err);
  }
};

module.exports = del;
