let mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
  name:{type: String, required: [true, "Name is required"]},
  numCorrect:{type: Number, default: 0},
  numGuessed:{type: Number, default: 0},
  questions:[{type: mongoose.Schema.Types.ObjectId, ref: 'Question'}]
}, { timestamps: true });

mongoose.model('User', UserSchema);
