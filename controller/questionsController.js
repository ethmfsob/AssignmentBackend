const Question = require('../model/question')

const fetchQuestions = async (req, res) => {
    // Find the notes
    const questions = await Question.find();
    // Respond with them
    res.json({ questions: questions });
};

const fetchQuestion = async (req, res) => {
    // get id of the url
    const questionId = req.params.id;

    // Find the question using id
    const question = await Question.findById(questionId);
    // Respond with the note
    res.json({ question: question });
};

const createQuestion = async (req, res) => {
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
    // respind with the new note
    res.json({ question: question });
};

const updateQuestion = async (req, res) => {
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

    // find updated note
    const question = await Question.findById(questionId);
    // respond with it
    res.json({ question: question });
};

const deleteQuestion = async (req, res) => {
    // fet id off the url
    const questionId = req.params.id;
    // console.log(questionId);
    // delete
    await Question.deleteOne({ _id: questionId });
    //respond
    res.json({ success: "question deleted" });
};

module.exports = {
    fetchQuestions: fetchQuestions,
    fetchQuestion: fetchQuestion,
    createQuestion: createQuestion,
    updateQuestion: updateQuestion,
    deleteQuestion: deleteQuestion,
};