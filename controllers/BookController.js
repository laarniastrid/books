var books = require('../models/Books.js');

module.exports = {
  // POST collection
  create: function(req, res, next) {
    books.push(req.body);
    res.status(200).json(books[books.length - 1]);
  },
  // GET collection
  index: function(req, res, next) {
    var results = [];
    if (req.query.author) {
      for (var i = 0; i < books.length; i++) {
        if (req.query.author === books[i].author) {
          results.push(books[i]);
        }
      }
    } else {
      results = books;
    }
    // res.status(200).json(books);
    res.status(200).json(results);
  },
  // GET collection/:idx
  show: function(req, res, next) {
    var idx = parseInt(req.params.idx);
    res.status(200).json(books[idx]);
  },
  // PUT collection/:idx
  update: function(req, res, next) {
    var idx = parseInt(req.params.idx);
    books[idx] = req.body;
    res.status(200).json(books[idx]);
  },
  // DELETE collection | collection/:idx
  destroy: function(req, res, next) {
    var idx = parseInt(req.params.idx);
    books.splice(req.params.idx, 1);
    res.status(204).send();
  }
}
