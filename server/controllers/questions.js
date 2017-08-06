let mongoose = require('mongoose');
let User = mongoose.model('User');
let Question = mongoose.model('Question');

module.exports = {
  index: function(req, res){
    Question.find({}, (err, questions) => {
      if(err){return res.json(err)}
      return res.json(questions);
    })
},
  create: function(req, res){
    Question.create(req.body, (err, question) => {
      if(err){return res.json(err)}
      return res.json(question);
    })
  },
}
