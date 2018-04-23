module.exports = (Sequelize, DataTypes, databaseName) => {
    return Sequelize.define('Customer', {
        NAME: DataTypes.STRING,
        ID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            key: 'id',

        },
    },
    {
        database: databaseName,
        timestamps: false,
        associate: function(models) {
            Customer.hasMany(models.CustomerAddress, { onDelete: 'cascade' });
        }
    });
}
