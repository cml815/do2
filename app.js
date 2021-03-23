const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const exphbs = require('express-handlebars');
const sass = require('sass');

const port = 5000

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

// view engine setup

app.set('view engine', 'hbs');

app.engine('hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: __dirname + '/views/layouts',
  extname: '.hbs'
}));


app.get('/', function (req, res) {
  res.render('home');
});

/* SASS setup - const result = sass.renderSync({file: style.scss}); */

app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use("/public", express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//Makes the app listen to port 3000
app.listen(port, () => console.log(`App listening to port ${port}`));

module.exports = app;
