let path = require('path');
let Users = require('../controllers/users');
let Questions = require('../controllers/questions');

module.exports = function(app){
  app.get('/users', Users.index);
  app.post('/users', Users.create);
  app.put('/users/:id/:num', Users.incGuesses);

  app.get('/questions', Questions.index);
  app.post('/questions', Questions.create);

  app.all('*', (req, res, next) => {
      res.sendFile(path.resolve('./public/dist/index.html'));
    });
};
