// Import dependencies
const express = require('express');
const connectToDb = require('./config/connectToDb')

// Create express app
const app = express()

// Variables
const PORT = 5000;

// connect to data base
connectToDb();


// Routing
app.get('/', (req, res) => {
    res.json("hello world");
})

// start our server
app.listen(PORT, () => {
    console.log("server listening on port ", PORT)
});
