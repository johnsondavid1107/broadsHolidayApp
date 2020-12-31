
const path = require('path')



module.exports = function (app) {


    app.get('/', function (req, res) {
        console.log("reached")
        res.sendFile(path.join(__dirname, "../public/index.html"))
    })


}
