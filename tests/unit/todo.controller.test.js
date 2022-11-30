const todoController = require('../../controllers/todo.controllers');
const todoModel = require('../../model/todo.model');
const httpMocks = require('node-mocks-http');
// import mock data
const newTodo = require('../mock-data/new-todo.json');

// create mock function for see if it's being call
todoModel.create = jest.fn();

let req, res, next;
beforeEach(() => {
// create mock request and response
req = httpMocks.createRequest();
res = httpMocks.createResponse();
next = null;
})

describe("TodoController.createTodo", () => {

    beforeEach(() => {
        //mock data
        req.body = newTodo;
    });

    it('should have a createTodo function', () => {
        expect(typeof todoController.createTodo).toBe("function");
    });
    it('should call todoModel.create', () => {
        todoController.createTodo(req,res,next);
        //.toHaveBeenCalledWith = .toBeCalledWith
        /*to ensure that a mock function was called with specific arguments. 
        The arguments are checked with the same algorithm that .toEqual uses.*/
        expect(todoModel.create).toBeCalledWith(newTodo);
    });
    it('should return 201 response code', () => {
        todoController.createTodo(req,res,next);
        //check response status
        expect(res.statusCode).toBe(201);
        //check if response has been called back
        expect(res._isEndCalled()).toBeTruthy();
    })
    it('should return a JSON body in response', ()=> {
        todoModel.create.mockReturnValue(newTodo);
        todoController.createTodo(req,res,next);
        
        // node mode http module -> _getJSONData()
        // remember : res = httpMocks.createResponse();

        /*expect(res._getJSONData()).toBe(newTodo); -> not working
        If it should pass with deep equality, replace "toBe" with "toStrictEqual"
        because newTodo have same value but not same reference*/
        expect(res._getJSONData()).toStrictEqual(newTodo);
        
    })
    
});