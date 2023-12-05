// Import dependencies
const express = require('express');
const connectToDb = require('./config/connectToDb')
const questionsController = require('./controller/questionsController')

// Create express app
const app = express()

// configure an express app
// to read json file
app.use(express.json());

// Variables
const PORT = 5000;

// connect to data base
connectToDb();


// Routing

// fetch questions
app.get('/questions', questionsController.fetchQuestions)

// fetch a single question
app.get('/questions/:id', questionsController.fetchQuestion)

// create a question
app.post('/questions', questionsController.createQuestion)

// update a question
app.put('/questions/:id', questionsController.updateQuestion)

// delete a question
app.delete('/questions/:id', questionsController.deleteQuestion)

// start our server
app.listen(PORT, () => {
    console.log("server listening on port ", PORT)
});
