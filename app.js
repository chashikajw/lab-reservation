var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressHbs = require('express-handlebars');
var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var bodyParser = require('body-parser');
var reservationData = require('./models/reservation');

var indexRouter = require('./routes/index');
var reservations = require('./routes/reservations');
var Validator = require('validator');




var app = express();

mongoose.connect('mongodb://localhost:27017/lab_reservation');
var db = mongoose.connection;

app.use(bodyParser.json());

//handle mongo error
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("connected to the database");
});

//use sessions for tracking logins
app.use(session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
        mongooseConnection: db
    })
}));

app.get('/api/bookings', (req, res) => {
    res.json([{
        id: 1,
        name: "Hiccup",
        password: 'hiccup'
    }, {
        id: 2,
        name: "King Arthur",
        password: 'king-arthur'
    }, {
        id: 1,
        name: "Hiccup",
        password: 'hiccup'
    }
    ]);

});



app.post('/api/searchBookings', (req,res,next) => {

    var date = req.body.reservation.Date.substr(0,10).trim();
    var hall = req.body.reservation.hallname;
    console.log(date);

    reservationData.find(
        {
            $and :
            [
                {"hallname": hall},
                {"Date": date }


            ]
        },
        function (err, docs) {
            res.json(docs);
        }
    );

});

app.post('/api/getreservations', function(req, res, next) {
    reservationData.find(function (err,docs) {
        //res.render({ title: 'Express', reservations: docs, layout: 'layout.hbs' });
        res.json();
    });

});

function isEmpty(arr) {
    if(arr.length== 0){
        return true;
    }else{
        return false;
    }

}

function validateInput(frm,to,hall,date){

    reservationData.find(
       /* {
            $and: [
                {
                    "hallname" : hall
                },
                {
                    "Date" : date
                },
                {
                    $or : [
                               {
                             "timefrom": {$gt: frm, $lt:to}
                         },
                         {
                             "timeto": {$gt: frm, $gt: to}
                         },
                        {
                            $and:
                            [
                                 {
                                     "timefrom": {$lt: frm, $lt:to}
                                 },
                                 {
                                     "timeto": {$gt: frm, $gt: to}
                                 },
                            ]
                        },
                        {
                            $and:
                            [
                                  {
                                     "timefrom": {$lt: frm, $lt:to}
                                 },
                                 {
                                     "timeto": {$gt: frm, $lt: to}
                                 },
                            ]
                        },
                        {
                            $and:
                            [
                                {
                                     "timefrom": {$gt: frm, $lt:to}
                                 },
                                 {
                                     "timeto": {$gt: frm, $lt: to}
                                 },
                            ]
                        },
                    ]
                },

            ]
        },*/
        {"hallname" : hall},
        {"Date" : date},
        function (err,res) {
            let errors = {};
            if(err){
                console.log(err);
            }else{
                console.log(res);

                if(res.length > 0){

                    errors.timefrom = "this time is already booked";
                    /*return {
                        errors,
                        isValid: false
                    }*/
                    //res.json(errors);
                    console.log(errors);

                    res.json(errors);
                }else{
                    //res.json({success: true});
                    res.json(errors);
                    //res.json(errors);
                }
            }
        }
    );



}

app.post('/api/reservations', (req,res,next) =>{
        var frm = req.body.reservation.timefrom;
        var to = req.body.reservation.timeto;
        var date = req.body.reservation.Date.substr(0, 10).trim();
        var hall = req.body.reservation.hallname;
        //validateInput(frm,to,hall,date);

    //reservation validation
    reservationData.find(
         {
             $and: [
                 {
                     "hallname" : hall
                 },
                 {
                     "Date" : date
                 },
                 {
                     $or : [
                         {
                         $and: [
                             {
                                 "timefrom": {$gt: frm, $lt:to}
                             },
                             {
                                 "timeto": {$gt: frm, $gt: to}
                             },
                         ]

                     },

                         {
                             $and:
                             [
                                  {
                                      "timefrom": {$lt: frm, $lt:to}
                                  },
                                  {
                                      "timeto": {$gt: frm, $gt: to}
                                  },
                             ]
                         },
                         {
                             $and:
                             [
                                   {
                                      "timefrom": {$lt: frm, $lt:to}
                                  },
                                  {
                                      "timeto": {$gt: frm, $lt: to}
                                  },
                             ]
                         },
                         {
                             $and:
                             [
                                 {
                                      "timefrom": {$gt: frm, $lt:to}
                                  },
                                  {
                                      "timeto": {$gt: frm, $lt: to}
                                  },
                             ]
                         },
                     ]
                 },

             ]
         },
        function (err,data) {
            console.log(data.length);
            let errors = {};
            if(err){
                console.log(err);
            }else{


                if(data.length > 0){

                    errors.timefrom = "this time is already booked";


                   // console.log(errors, "error");

                    res.json(errors);
                }else{
                    //res.json({success: true});
                    //insert reservation

                    var Reservation  =  {
                        email: req.body.reservation.email,
                        hallname: req.body.reservation.hallname,
                        Date: req.body.reservation.Date.substr(0, 10).trim(),
                        timeto: req.body.reservation.timeto,
                        timefrom: req.body.reservation.timefrom,
                        reserve_person: req.body.reservation.reserve_person,
                        reason: req.body.reservation.reason,
                        permissonedby: req.body.reservation.permissonedby,
                        is_accepted: req.body.reservation.is_accepted

                    }


                    reservationData.create(Reservation, function (error, reservation) {
                        if (error) {
                            //console.log(error);
                            return next(error);
                        } else {
                            console.log("succefully inserted");
                        }
                    });

                    res.json(errors);
                    //res.json(errors);
                    console.log(errors, "succes");
                }
            }
        }
    );




    //console.log(req.body.reservation.email);
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
