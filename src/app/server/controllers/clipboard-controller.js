var Clipboard = require('../models/clipboard');

module.exports.create = function (req, res) {
  var clipboard = new Clipboard(req.body);
  clipboard.save(function (err, result) {
    res.json(result);
  });
}

module.exports.list = function (req, res) {
  Clipboard.find({}, function (err, results) {
    res.json(results);
  });
}