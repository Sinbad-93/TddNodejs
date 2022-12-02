const todoModel = require('../model/todo.model');

exports.createTodo = async (req,res,next) => {
    try {
    const createModel = await todoModel.create(req.body);
    res.status(201).json(createModel);
    } catch (error) {
        next(error);
    }
    
};

exports.getTodos = async (req,res,next) => {
    try {
    const getCollection = await todoModel.find({});
    res.status(200).json(getCollection);
    } catch (error) {
        next(error);
    }
    
};