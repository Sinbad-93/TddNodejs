const express = require('express');
const todoRoutes = require('./routes/todo.routes')
const app = express();
const mongoDB = require('./mongodb.connect');

mongoDB.connect();

app.use(express.json());

app.use('/todos', todoRoutes);

app.use((error,req,res,next) => {
    //console.log(error);
    res.status(500).json({ message : error.message});
})

app.get('/', (req,res) => 
{
    res.send("Hello world");
});





module.exports = app;