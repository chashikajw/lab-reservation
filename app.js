var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressHbs = require('express-handlebars');

var indexRouter = require('./routes/index');


var app = express();

app.get('/api/bokings', (req, res) => {
    bookings(
        {
            "sites":
                [
                    {
                        "siteName": "JQUERY4U",
                        "domainName": "http://www.jquery4u.com",
                        "description": "#1 jQuery Blog for your Daily News, Plugins, Tuts/Tips &amp; Code Snippets."
                    },
                    {
                        "siteName": "BLOGOOLA",
                        "domainName": "http://www.blogoola.com",
                        "description": "Expose your blog to millions and increase your audience."
                    },
                    {
                        "siteName": "PHPSCRIPTS4U",
                        "domainName": "http://www.phpscripts4u.com",
                        "description": "The Blog of Enthusiastic PHP Scripters"
                    }
                ]
        });

});



// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'hbs');

app.engine('.hbs', expressHbs({defaultLayout: 'layout' , extname: '.hbs'}));
app.set('view engine', '.hbs');



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);




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

module.exports = app;
