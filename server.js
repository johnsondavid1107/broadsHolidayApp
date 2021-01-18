const express = require('express');
const db = require('./models');
const PORT = process.env.PORT || 1224;
const app = express();
const session = require('express-session')
const passport = require("./config/passport")



//Creating intances ------------------


//Middleware--------------------------
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
    secret: "password",
    resave: true,
    saveUninitialized: true,
    cookie: { _expires: 3600000 }
}));
app.use(passport.initialize());
app.use(passport.session());




require("./routes/htmlRoutes.js")(app);
require('./routes/apiRoutes.js')(app)














db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log('Port open and listening at http://localhost:', PORT)
    });
});