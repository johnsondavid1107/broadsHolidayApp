const express = require('express');
const db = require('./models');
const PORT = process.env.PORT || 1224;
const app = express();



//Creating intances ------------------


//Middleware--------------------------
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'))

require("./routes/htmlRoutes.js")(app);
require('./routes/apiRoutes.js')(app)




























db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log('Port open and listening # ', PORT)
    });
});