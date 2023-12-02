const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const api = require("./routes/index");

require("dotenv").config();
const { DB_HOST, PORT = 3000 } = process.env;

const app = express();

// Express settings
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

// Routes
app.use("/api/employee", api.employee);
app.use("/api/department", api.department);

// Middlewares
app.use((error, req, res, next) => {
  console.error("error", error);
  let statusCode = 500;
  let errorMessage = "Internal Server Error";

  if (error.isHttpError) {
    statusCode = error.statusCode;
    errorMessage = error.body?.error_text || error.title;
  }

  const newError = { error: errorMessage };

  if (error?.body?.error_message) newError.message = error.body.error_message;

  res.status(statusCode).json(newError);
});

app.use((req, res, next) => {
  console.error("err", req);
  res.status(404).json({
    error: "Not Found",
  });
});

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log(
      `Listening on http://localhost:${PORT} 🚀 ...`
    );
    app.listen(PORT);
  })
  .catch((error) => {
    console.error("Mongo Error: ", error.message);
    process.exit(1);
  });
