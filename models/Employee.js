const { Schema, Types, model } = require("mongoose");

const employeeSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    bonuses: {
      type: Number,
    },
    contact: {
      type: String,
    },
    department: {
      type: Types.ObjectId,
      ref: "Department",
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

employeeSchema.post("save", handleErrors);

const Employee = model("Employee", employeeSchema);

module.exports = Employee;
