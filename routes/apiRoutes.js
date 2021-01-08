const path = require('path')
const db = require('../models');


module.exports = function (app) {

    app.post('/apiUser', function (req, res) {

        console.log(req.body)

        db.User.create({
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            email: req.body.email,
            password: req.body.password

        }).then(function (something) {
            res.json(something)
        })

    });
    //Tryng to figure out how to update an entry that isnt there yet by targetting where clause to null..Doesnt work
    //might need to add a second save button in the client js to record the req.params value to target the update function
    app.put('/putInfo', function (req, res) {
        db.Entry.update({
            person: req.body.person,
            entry: req.body.entry,
            UserId: '1'
        }, {
            where: {
                id: null
            }
        }
        ).then(function (response) {
            res.send(response)
            console.log(req.body)
        })
    })
    //------------------------------------------
    //created this to test usage of posting new entry to table
    app.post('/createNote', function (req, res) {
        db.Entry.create({
            person: req.body.person,
            entry: req.body.entry,
            UserId: '1'
        }
        ).then(function (response) {
            res.send(response)
            console.log(req.body)
        })
    })

    //------------------------------------------

    app.get('/logUser', function (req, res) {
        db.User.findOne({
            where: { email: req.body.email }
        }).then(function (emailUser) {
            if (!emailUser)
                console.log("no user found")

            res.end();
        })



    })

    //Found on youtube, should find all users and their connected entries using include clause on line 72
    //Need to also change where id clause to req.user id or currently user logged in's ID

    app.get('/api/entries', function (req, res) {
        db.User.findOne({
            include: [db.Entry],
            where: { id: "1" }

        }).then(function (allUsers) {
            res.send(allUsers);
        })
    })

    //--------------------------------
    //post route set up to take everything from database were the user clicks in the list field and send back to client js to post onto page
    app.post('/api/PostEntries', function (req, res) {
        db.Entry.findOne({
            include: [db.User],
            where: { person: req.body.entry }


        }).then(function (allUsers) {
            res.send(allUsers);
        })
    })



}
//--------------------------------------------------------------------