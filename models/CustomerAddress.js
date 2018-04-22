
module.exports = (Sequelize, DataTypes, databaseName) => {

    Sequelize.define('Customer_Addresse', {
        CUSTOMER_ID: DataTypes.INTEGER,
        STREET_ADDRESS: DataTypes.STRING,
        POSTAL_CODE: DataTypes.STRING,
        COUNTRY: DataTypes.STRING,
    },
    {
        database: databaseName,
        timestamps: false,
        associate: function(models) {
            Customer_Addresse.belongsTo(models.Customer);
          }
    });
}
