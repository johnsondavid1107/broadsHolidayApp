module.exports = function (sequelize, Datatype) {
    var Entry = sequelize.define('Entry', {
        person: Datatype.STRING,
        entry: Datatype.STRING

    });

    Entry.associate = models => {
        Entry.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };


    return Entry;
}
