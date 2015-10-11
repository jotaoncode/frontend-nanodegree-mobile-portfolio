/**
 * Module dependencies
 */

var express = require('express'),
  http = require('http'),
  path = require('path'),
  routing = require('./routing'),
  app = module.exports = express(),
  resources = path.join(__dirname, './');

/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.static(resources));

/**
 * Routes
 */
app.get('/', function (req, res) {
  var pathPage = __dirname + "/dist";
  routing(req, res, pathPage);
});
app.get('/before/home', function (req, res) {
  var pathPage = __dirname + "/before/index.html";
  routing(req, res, pathPage);
});
app.get('/before/pizza', function (req, res) {
  var pathPage = __dirname + "/before/views/pizza.html";
  routing(req, res, pathPage);
});
app.get('/before/game2048', function (req, res) {
  var pathPage = __dirname + "/before/project-2048.html";
  routing(req, res, pathPage);
});
app.get('/before/mobile', function (req, res) {
  var pathPage = __dirname + "/before/project-mobile.html";
  routing(req, res, pathPage);
});
app.get('/before/webperf', function (req, res) {
  var pathPage = __dirname + "/before/project-webperf.html";
  routing(req, res, pathPage);
});
app.get('/dist/home', function (req, res) {
  var pathPage = __dirname + "/dist/index.html";
  routing(req, res, pathPage);
});
app.get('/dist/pizza', function (req, res) {
  var pathPage = __dirname + "/dist/pizza.html";
  routing(req, res, pathPage);
});
app.get('/dist/game2048', function (req, res) {
  var pathPage = __dirname + "/dist/project-2048.html";
  routing(req, res, pathPage);
});
app.get('/dist/mobile', function (req, res) {
  var pathPage = __dirname + "/dist/project-mobile.html";
  routing(req, res, pathPage);
});
app.get('/dist/webperf', function (req, res) {
  var pathPage = __dirname + "/dist/project-webperf.html";
  routing(req, res, pathPage);
});
/**
 * Start Server
 */
http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
