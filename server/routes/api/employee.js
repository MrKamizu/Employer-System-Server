const express = require("express");
const router = express.Router();

const employeeController = require("../../controllers/employee/index");
const employeeValidation = require("../../validation-scheme/employee");

/**
 * API-точка для отримання списку працівників
 */
router.get("/", employeeController.get);

/**
 * API-точка для додавання нового працівника
 */
router.post("/", [...employeeValidation.add], employeeController.add);

/**
 * API-точка для додавання нового працівника
 */
router.delete("/", employeeController.del);

module.exports = router;
