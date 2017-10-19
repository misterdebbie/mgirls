var mongoose = require('mongoose');
var Use = mongoose.model('User');

var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};
module.exports.displayAll = function (req, res) {
  sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.usersCreate = function (req, res) {
  sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.userReadOne = function (req, res) {
  sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.userUpdateOne = function (req, res) {
  sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.userDeleteOne = function (req, res) {
  sendJsonResponse(res, 200, {"status" : "success"});
};
