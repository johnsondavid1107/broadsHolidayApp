const express = require('express');
const db = require('./models');
const PORT = process.env.PORT || 1224;
const app = express();
require("./routes/htmlRoutes.js")(app);


//Creating intances ------------------


//Middleware--------------------------
app.use(express.urlencoded({ extended: true }));
app.use(express.json());





























db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log('Port open and listening # ', PORT)
    });
});