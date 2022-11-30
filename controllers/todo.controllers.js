const todoModel = require('../model/todo.model');

exports.createTodo = (req,res,next) => {
    const createModel = todoModel.create(req.body);
    res.status(201).json(createModel);
};