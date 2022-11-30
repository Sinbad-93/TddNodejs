const todoModel = require('../model/todo.model');

exports.createTodo = async (req,res,next) => {
    const createModel = await todoModel.create(req.body);
    res.status(201).json(createModel);
};