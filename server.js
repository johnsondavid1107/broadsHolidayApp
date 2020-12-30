const express = require('express');
const db = require('./models');

const PORT = process.env.PORT || 1224;

const app = express();

























db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log('Port open and listening # ', PORT)
    });
});