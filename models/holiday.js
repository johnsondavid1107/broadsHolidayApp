module.exports = function (sequelize, Datatype) {
    var Holiday = sequelize.define("User", {
        first_name: Datatype.STRING,
        last_name: Datatype.STRING,
        email: {
            type: Datatype.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: Datatype.STRING


    });
    return Holiday;

}

