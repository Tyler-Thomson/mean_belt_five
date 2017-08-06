let mongoose = require('mongoose');
let User = mongoose.model('User');

module.exports = {
  index: function(req, res){
    User.find({}, (err, users) =>{
      if(err){return res.json(err)}
      return res.json(users);
    })
  },
  create: function(req, res){
    User.findOne({name: req.body.name}, (err, user) => {
      if(err){return res.json(err)}
      else if(!user){
        User.create(req.body, (err, user) => {
          if(err){return res.json(err)}
          req.session.user_id = user._id; //Save user into session
          return res.json(user);
        })
      }else{
        req.session.user_id = user._id; //Save user into session
        return res.json(user);
      }
    })
  },
  incGuesses: function(req, res){
    if(req.params.num == 0){
      User.findByIdAndUpdate(req.params.id, { $inc: {"numCorrect": 0, "numGuessed": 3}},
      { new: true }, (err, user) =>{
        if(err){return res.json(err)}
        return res.json(true);
      })
    }
    else if(req.params.num == 1){
      User.findByIdAndUpdate(req.params.id, { $inc: {"numCorrect": 1, "numGuessed": 3}},
      { new: true }, (err, user) =>{
        if(err){return res.json(err)}
        return res.json(true);
      })
    }
    else if(req.params.num == 2) {
      User.findByIdAndUpdate(req.params.id, { $inc: {"numCorrect": 2, "numGuessed": 3}},
      { new: true }, (err, user) =>{
        if(err){return res.json(err)}
        return res.json(true);
      })
    }
    else if(req.params.num == 3) {
      User.findByIdAndUpdate(req.params.id, { $inc: {"numCorrect": 3, "numGuessed": 3}},
      { new: true }, (err, user) =>{
        if(err){return res.json(err)}
        return res.json(true);
      })
    }
  }
}
