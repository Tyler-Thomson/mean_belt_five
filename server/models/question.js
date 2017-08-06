let mongoose = require('mongoose');

let QuestionSchema = new mongoose.Schema({
  question:{type: String, required: [true, "Name is required"],
    min_length:[15, "You question must have at least 15 characters"]},
  correct:{type: String, required: [true, "You must have a correct answer"]},
  wrongOne:{type: String, required: [true, "Wrong answer field must have content"]},
  wrongTwo:{type: String, required: [true, "Wrong answer field must have content"]},
}, { timestamps: true });

mongoose.model('Question', QuestionSchema);
