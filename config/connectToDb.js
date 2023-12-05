// Import mongoose

const mongoose = require('mongoose');

// variable 
const URL = 'mongodb+srv://ethmfsob:ethmfsob123@cluster0.b3gkget.mongodb.net/?retryWrites=true&w=majority'

async function connectToDb() {
    try {
        await mongoose.connect(URL);
    console.log("Database connected")
    } catch(err){
        console.log(err)
    }
    
}

module.exports = connectToDb;