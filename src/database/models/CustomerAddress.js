module.exports = (Sequelize, DataTypes, databaseName) => {
    return Sequelize.define('Customer_Addresse', {
        ID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            key: 'id',

        },
        CUSTOMER_ID: DataTypes.INTEGER,
        STREET_ADDRESS: DataTypes.STRING,
        POSTAL_CODE: DataTypes.STRING,
        COUNTRY: DataTypes.STRING,
    },
    {
        database: databaseName,
        timestamps: false,
    });
}
