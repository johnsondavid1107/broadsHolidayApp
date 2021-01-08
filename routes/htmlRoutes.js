
const path = require('path');
const bcrypt = require('bcrypt')
const db = require('../models')



module.exports = function (app) {


    app.get('/', function (req, res) {
        console.log("reached")
        res.sendFile(path.join(__dirname, "../public/signIn.html"))
    })

    app.get('/login', function (req, res) {
        console.log("reached")
        res.sendFile(path.join(__dirname, "../public/login.html"))
    })
    app.get('/home', function (req, res) {
        console.log("reached")
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
            })
            console.log("User Created!")
            res.redirect('/login')
        } catch (err) {
            if (err) {
                console.log(err)
            }
            res.redirect('/')
        }
    })

}
