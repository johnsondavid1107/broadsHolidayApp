const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy
const db = require('../models')
const bcyrpt = require('bcrypt')

passport.use(new LocalStrategy(
    {
        usernameField: "email"
    },
    function (email, password, done) {
        db.User.findOne({
            where: { email: email }
        }).then(async function (emailUser) {
            if (!emailUser) {
                return done(null, false, {
                    message: "No Email on file"
                });
            } try {
                if (await bcyrpt.compare(password, emailUser.password)) {
                    return done(null, emailUser)
                } else {
                    return done(null, false, { message: "Password is incorrect" })
                }

            } catch (e) {
                if (e)
                    throw e;

            }
            return done(null, emailUser)

        })





    }

))
passport.serializeUser(function (user, cb) {
    cb(null, user);
})
passport.deserializeUser(function (obj, cb) {
    cb(null, obj)
})

module.exports = passport