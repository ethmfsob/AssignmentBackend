const  mongoose  = require("mongoose");

const questionSchema = new mangoose.Schema({
  title: String,
  catogery: String,
  date: Date,  
});

const Question = mongoose.model("Question", questionSchema);