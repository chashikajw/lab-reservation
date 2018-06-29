var express = require('express');
var router = express.Router();
var app = express();
var User = require('../models/User');
var Reservations = require('../models/reservation');
var Validator = require('validator');
const PDFDocument = require('pdfkit');



/* GET home page.
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});*/

function requiresLogin(req, res, next) {
    if (req.session && req.session.userId) {
        return next();
    } else {
        var err = new Error('You must be logged in to view this page.');
        err.status = 401;
        return next(err);
    }
}



/*router.put('/acceptReservation/:id', function (req,res) {
    var id = req.params.id;
    Reservations.findOne({_id: id}, function (err, foundObject) {
        if(err){
            console.log(err);
            res.status(500).send();
        }else{
            if(!foundObject){
                console.log("not found obj");
                res.status(404).send();
            }else{
                foundObject.is_accepted = true;
            }
            foundObject.save(function (err, updateObject) {
                if(err){
                    console.log(err);
                    res.status(500).send();
                }else{
                    res.send(updateObject);
                    console.log("succes update");
                }
            })
        }

    })



})*/

router.get('/reservations', function(req, res, next) {
    Reservations.find(function (err,docs) {
        res.render('reservations', { title: 'Express', reservations: docs, layout: 'layout.hbs' });
    });

});

router.get('/api/getreservations', function(req, res, next) {

    Reservations.find(function (err,docs) {
        res.send(docs);
    });

});





/*router.get('/signup', function(req, res, next) {
    res.render('signup', { title: 'Express' });
});*/

router.get('/signup*', function (req, res, next) {
    //req.app.locals.layout = 'signup'; // set your layout here

    res.render('signup', { title: 'Express', layout: 'signup.hbs' });

});




router.post('/register', function (req, res, next) {
    // confirm that user typed same password twice
    if (req.body.password !== req.body.passwordConf) {
        var err = new Error('Passwords do not match.');
        err.status = 400;
        res.send("passwords dont match");
        return next(err);
    }

    if (req.body.email &&
        req.body.username &&
        req.body.password &&
        req.body.passwordConf) {

        var userData = {
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            passwordConf: req.body.passwordConf,
        }

        User.create(userData, function (error, user) {
            if (error) {
                return next(error);
            } else {
                req.session.userId = user._id;
                return res.redirect('/');
            }
        });

    } else if (req.body.logemail && req.body.logpassword) {
        User.authenticate(req.body.logemail, req.body.logpassword, function (error, user) {
            if (error || !user) {
                var err = new Error('Wrong email or password.');
                err.status = 401;
                return next(err);
            } else {
                req.session.userId = user._id;
                return res.redirect('/', { username: user.username, email:user.email, layout: 'layout.hbs' });
            }
        });
    } else {
        var err = new Error('All fields required.');
        err.status = 400;
        return next(err);
    }
})



// GET route after registering
router.get('/', function (req, res, next) {
    User.findById(req.session.userId)
        .exec(function (error, user) {
            if (error) {
                return next(error);
            } else {
                if (user === null) {
                    /*var err = new Error('Not authorized! Go back!');
                    err.status = 400;
                    return next(err);*/
                    Reservations.find(function (err,docs) {
                        res.render('index', {reservations: docs, layout: 'layout.hbs' });
                    });
                } else {

                    Reservations.find(function (err,docs) {
                        res.render('index', {username: user.username,email:user.email, reservations: docs, layout: 'layout.hbs' });
                    });
                }
            }
        });
});


router.get('/reservations', function(req, res, next) {
    Reservations.find(function (err,docs) {
        res.render('reservations', { title: 'Express', reservations: docs, layout: 'layout.hbs' });
    });

});


router.post('/login', function (req, res, next) {


    if (req.body.email && req.body.password) {
        User.authenticate(req.body.email, req.body.password, function (error, user) {
            if (error || !user) {
                var err = new Error('Wrong email or password.');
                err.status = 401;
                return next(err);
            } else {
                req.session.userId = user._id;
                return res.redirect('/', { username: user.username, email:user.email, layout: 'layout.hbs' });
                //return res.render('index', { username: user.username, email:user.email, layout: 'layout.hbs' });
            }
        });
    } else {
        var err = new Error('All fields required.');
        err.status = 400;
        return next(err);
    }
})


// GET for logout logout
router.get('/logout', function (req, res, next) {
    if (req.session) {
        // delete session object
        req.session.destroy(function (err) {
            if (err) {
                return next(err);
            } else {
                return res.redirect('/signup');
            }
        });
    }
});

router.get('/signin*', function (req, res, next) {
    //req.app.locals.layout = 'signup'; // set your layout here

    res.render('signin', { title: 'Express', layout: 'signup.hbs' });

});

router.get('/acceptReservation/:id',function (req, res, next) {
    var id = req.params.id;
    Reservations.findById(id, function (err, Object) {
        if (err) return handleError(err);

        Object.is_accepted = true;
        Object.save(function (err, updatedObject) {
            if (err) return handleError(err);
            //res.send(updatedObject);
            return res.redirect('/');
        });
    });
})

router.get('/RejectReservation/:id', function(req, res, next) {
    var id = req.params.id;

    Reservations.remove({ _id: id }, function(err) {
        if (!err) {
            return res.redirect('/');
        }
        else {
            console.log("error in deleting");
        }
    });

});


router.post('/pdf', (req, res) => {
    const doc = new PDFDocument()
    let filename = "asasasa"
    // Stripping special characters
    filename = encodeURIComponent(filename) + '.pdf'
    // Setting response to 'attachment' (download).
    // If you use 'inline' here it will automatically open the PDF
    res.setHeader('Content-disposition', 'attachment; filename="' + filename + '"')
    res.setHeader('Content-type', 'application/pdf')
    const content = "adooooo"
    doc.y = 300
    doc.text(content, 50, 50)
    doc.pipe(res)
    doc.end()
})





module.exports = router;
