
const path = require('path');
const bcrypt = require('bcrypt')
const db = require('../models')
const passport = require("../config/passport")
const isUser = require('../config/isUser')



module.exports = function (app) {


    app.get('/', function (req, res) {
        console.log("reached Signup Page")
        res.sendFile(path.join(__dirname, "../public/signIn.html"))
    })

    app.get('/login', function (req, res) {
        console.log("reached login page")
        res.sendFile(path.join(__dirname, "../public/login.html"))
    })
    app.get('/home', isUser, function (req, res) {
        console.log("reached home page")
        res.sendFile(path.join(__dirname, "../public/home.html"))
    })


    app.post('/', async function (req, res) {

        try {
            const secureSecret = await bcrypt.hash(req.body.password, 10)
            db.User.create({
                first_name: req.body.firstName,
                last_name: req.body.lastName,
                email: req.body.email,
                password: secureSecret
            }).then(function () {
                console.log("User Created!")
                res.redirect('/login')
            })

        } catch (err) {
            if (err) {
                console.log(err)
            }

        }


    })

    app.post("/login", passport.authenticate('local', {
        failureRedirect: "/login"
    }), function (req, res) {
        console.log(req.user.id, "line55 htmlRoutes")
        res.redirect('/home')
    })










}
