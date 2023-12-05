const  mongoose  = require("mongoose");

const questionSchema = new mongoose.Schema({
  title: String,
  catogery: String,
  date: String,  
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;