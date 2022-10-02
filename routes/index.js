var express = require('express');
var router = express.Router();
var FormData = require('../model');

/* GET home page. */

router.get('/', function (req, res, next) {
    res.render('form', { title: 'Epic Games' });
});

router.post('/', function (req, res, next) {

    subs = req.body.email_subscription;
    if (subs) subs = true;
    else subs = false;

    var formdata = new FormData(
        {
            country: req.body.country,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            display_name: req.body.display_name,
            email: req.body.email,
            password: req.body.password,
            email_subscription: subs,
        }
    )
    formdata.save(function (err) {
        if (err) { return next(err); }
        res.redirect('/submit/' + formdata._id);
    });
})

// Detail page

router.get('/:id/detail', function (req, res, next) {
    FormData.findById(req.params.id)
        .exec(function (err, formdata) {
            if (err) return next(err);
            if (formdata == null) {
                var err = new Error('Account not found');
                err.status = 404;
                return next(err);
            }
            res.render('formDetail', { formdata: formdata, updatePass: '/' + req.params.id + '/updatepass' });
        })
})

router.post('/:id/detail', function (req, res, next) {

    subs = req.body.email_subscription;
    if (subs) subs = true;
    else subs = false;

    var formdata = new FormData(
        {
            _id: req.params.id,
            country: req.body.country,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            display_name: req.body.display_name,
            email: req.body.email,
            email_subscription: subs,
        }
    )
    FormData.findByIdAndUpdate(req.params.id, formdata, {}, function (err) {
        if (err) return next(err);
        res.redirect('/submit/' + req.params.id)
    });
})

router.get('/:id/updatepass', function (req, res, next) {
    res.render('updatePass');
})

router.post('/:id/updatepass', function (req, res, next) {

    FormData.findById(req.params.id)
        .exec(function (err, formdata) {
            if (err) return next(err);
            if (formdata == null) {
                var err = new Error('Account not found');
                err.status = 404;
                return next(err);
            }
            if (req.body.current_pass != formdata.password) {
                res.render('updatePass', {
                    passMatch: 'false',
                    current: req.body.current_pass,
                    new_: req.body.new_pass
                });
                return;
            }
            else {
                var formdata = new FormData(
                    {
                        _id: req.params.id,
                        password: req.body.new_pass
                    }
                )
                FormData.findByIdAndUpdate(req.params.id, formdata, {}, function (err) {
                    if (err) return next(err);
                    res.redirect('/submit/' + req.params.id)
                });
            }
        })
})

// Submit page

router.get('/submit/:id', function (req, res, next) {
    res.render('formSubmit', { formdetail: '/' + req.params.id + '/detail' });
})

module.exports = router;