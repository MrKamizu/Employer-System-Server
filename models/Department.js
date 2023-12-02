const { Schema, model } = require("mongoose");

const departmentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const handleErrors = (error, data, next) => {
  if (error.name === "MongoServerError" && error.code === 11000) {
    error.status = 409;
  } else {
    error.status = 400;
  }
  next();
};

departmentSchema.post("save", handleErrors);

const Department = model("Department", departmentSchema);

module.exports = Department;
