const express = require("express");
const router = express.Router();

const departmentController = require("../../controllers/department/index");
const departmentValidation = require("../../validation-scheme/department");

/**
 * API-точка для отримання списку працівників
 */
router.get("/", departmentController.get);

/**
 * API-точка для додавання нового працівника
 */
router.post("/", [...departmentValidation.add], departmentController.add);

/**
 * API-точка для додавання нового працівника
 */
router.delete("/", departmentController.del);

/**
 * API-точка для додавання нового працівника
 */
router.get("/get-employee", departmentController.getEmployee);

module.exports = router;
