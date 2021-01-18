module.exports = function (req, res, next) {

    if (req.user) {
        console.log(req.user, "line4 isUser")
        return next();

    }

    return res.redirect('/login')
}