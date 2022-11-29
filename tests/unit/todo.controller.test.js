const todoController = require('../../controllers/todo.controllers');

describe("TodoController.createTodo", () => {
    it('should have a createTodo function', () => {
        expect(typeof todoController.createTodo).toBe("function");
    })
})