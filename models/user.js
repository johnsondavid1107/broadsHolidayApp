module.exports = function (sequelize, Datatype) {
    var User = sequelize.define("User", {
        first_name: {
            type: Datatype.STRING,
            allowNull: false
        },
        last_name: {
            type: Datatype.STRING,
            allowNull: false
        },
        email: {
            type: Datatype.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: Datatype.STRING,



    }
    );



    User.associate = models => {
        User.hasMany(models.Entry, {
            onDelete: 'cascade'
        })
    }
    return User;



}


