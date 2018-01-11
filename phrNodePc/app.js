const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const reload = require('reload');
const app = express();
const exphbs  = require('express-handlebars');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
// webpack
const config = require('./webpack.config.js');
const compiler = webpack(config);
// app.use(webpackDevMiddleware(compiler, {
//   publicPath: config.output.publicPath
// }));

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
// app.use(require("webpack-hot-middleware")(compiler));


const hbs = exphbs.create({
  extname: '.hbs',
  partialsDir: [
    // 'views/partials/'
    'views/partials/'
  ]
});
// hbs.getPartials().then(function (partials) {
//   console.log('partials是是是', partials.header);
//   // => { 'foo/bar': [Function],
//   // =>    title: [Function] }
// });
// view engine setup

app.set('views', path.join(__dirname, 'views'));
// app.engine('handlebars', hbs.engine);
//phr  感觉问题出在这里
// app.engine('.hbs', exphbs({extname: '.hbs'}));
// app.set('view engine', '.hbs');


app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');


// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());



//先不用路由处理试试
const renderHome = require('./controllers/home');

app.use('/test', renderHome);

reload(app);

var index = require('./routes/index');
var users = require('./routes/users');
// app.use('/', index);
// app.use('/users', users);

app.use(express.static(path.join(__dirname, 'public')));


// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });
//
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });






module.exports = app;



