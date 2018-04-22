
module.exports = (Sequelize, DataTypes, databaseName) => {

    Sequelize.define('Customer', {
        NAME: DataTypes.STRING,
        ID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
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
