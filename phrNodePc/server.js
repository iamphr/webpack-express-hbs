const express = require('express');
// const webpack = require('webpack');
// const webpackDevMiddleware = require('webpack-dev-middleware');
//
var path = require('path');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

var reload = require('reload');
var http = require('http');
// var server = http.createServer(app);

// const config = require('./webpack.config.js');
// const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
// app.use(webpackDevMiddleware(compiler, {
//   publicPath: config.output.publicPath
// }));

//先不用路由处理试试
const renderHome = require('./controllers/home');
// console.log('renderhome是', renderHome);

app.use('/test', renderHome);

app.use('/index', function (req,res) {
  res.send('woshi wwwwefsdfhjhjb')
});
app.use('/home', function (req,res) {
  res.send('22222222')
});
reload(app);
// reloadServer = reload(app);
// watch.watchTree(__dirname + "/public", function (f, curr, prev) {
//   // Fire server-side reload event
//   reloadServer.reload();
// });
// Serve the files on port 3000.
app.listen(3333, function () {
  console.log('Example app listening on port 3333!');
});