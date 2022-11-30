const express = require('express');
const todoRoutes = require('./routes/todo.routes')
const app = express();
const mongoDB = require('./mongodb.connect');

mongoDB.connect();

app.use(express.json());

app.use('/todos', todoRoutes);

app.get('/', (req,res) => 
{
    res.send("Hello world");
});



app.listen(3000, () => {
    console.log("Server is now running")
});

module.exports = app;