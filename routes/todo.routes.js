const express = require ('express');
const todoController = require("../controllers/todo.controllers")
const router = express.Router();

router.post("/", todoController.createTodo);

module.exports = router;