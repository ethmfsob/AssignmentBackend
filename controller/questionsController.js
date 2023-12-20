const Question = require("../model/question");

const fetchQuestions = async (req, res) => {
  try {
    // Find the questions
    const questions = await Question.find();
    // Respond with them
    res.json({ questions: questions });
  } catch (err) {
    console.log(err);
  }
};

const fetchQuestion = async (req, res) => {
  try {
    // get id off the url
    const questionId = req.params.id;

    // Find the question using id
    const question = await Question.findById(questionId);
    // Respond with the note
    res.json({ question: question });
  } catch (err) {
    console.log(err);
  }
};

const createQuestion = async (req, res) => {
  try {
    // get the sent in data off request body
    const title = req.body.title;
    const catogery = req.body.catogery;
    const date = req.body.date;

    //create a question with it
    const question = await Question.create({
      title: title,
      catogery: catogery,
      date: date,
    });
    // respond with the new note
    res.json({ question: question });
  } catch (err) {
    console.log(err);
  }
};

const updateQuestion = async (req, res) => {
  try {
    // get id off the url
    const questionId = req.params.id;
    // get the data off the request body
    const title = req.body.title;
    const catogery = req.body.catogery;
    const date = req.body.date;
    // find and update the record
    await Question.findByIdAndUpdate(questionId, {
      title: title,
      catogery: catogery,
      date: date,
    });

    // find updated question
    const question = await Question.findById(questionId);
    // respond with it
    res.json({ question: question });
  } catch (err) {
    console.log(err);
  }
};

const deleteQuestion = async (req, res) => {
  try {
    // fet id off the url
    const questionId = req.params.id;
    // console.log(questionId);
    // delete
    await Question.deleteOne({ _id: questionId });
    //respond
    res.json({ success: "question deleted" });
  } catch (error) {
    console.error("An error occurred while deleting the question:", error);

    // Respond with an error message
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  fetchQuestions: fetchQuestions,
  fetchQuestion: fetchQuestion,
  createQuestion: createQuestion,
  updateQuestion: updateQuestion,
  deleteQuestion: deleteQuestion,
};
