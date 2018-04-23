const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const CustomerAddressController = {
    database: db.CustomerAddress,
    create: (req, res) => {
        try{
            const { body = {} } = req;
            const { STREET_ADDRESS: streetAddress = null } = body;
            const { POSTAL_CODE: postalCode = null } = body;
            const { COUNTRY: country = null } = body;
            const { CUSTOMER_ID: customerID = null } = body;
        
            return CustomerAddressController.database.create({
                CUSTOMER_ID: customerID,
                STREET_ADDRESS: streetAddress,
                POSTAL_CODE: postalCode,
                COUNTRY: country,
            })
            .then((data => {
                return res.status(200).send(data);
            }))
            .error((err) => {
                return res.status(500).send(err);
            })
        }
        catch(ex){
            return res.status(500).send(ex); 
        }
    },
    read: (req, res) => {
        try{
            return CustomerAddressController.database.findAll()
            .then((data => {
                let results = data.map((row => {return row.dataValues}));
                return res.status(200).send(results);
            }))
            .error((err) => {
        
                return res.status(500).send(err);
            })
        }
        catch(ex){
            return res.status(500).send(ex); 
        }
    },
    readByID: (req, res) => {
        try{
            return CustomerAddressController.database.findAll({
                where: {
                    ID: {
                            [Op.eq]:  req.params.ID
                        }
                }
            })
            .then((data => {
                let results = data.map((row => {return row.dataValues}));
                return res.status(200).send(results);
            }))
            .error((err) => {
                return res.status(500).send(err);
            })
        }
        catch(ex){
            return res.status(500).send(ex); 
        }
    },
    update: (req, res) => {
        try{
            const { body = {} } = req;
            const { STREET_ADDRESS: streetAddress = null } = body;
            const { POSTAL_CODE: postalCode = null } = body;
            const { COUNTRY: country = null } = body;
            const { CUSTOMER_ID: customerID = null } = body;

            return CustomerAddressController.database.update({
                STREET_ADDRESS: streetAddress,
                POSTAL_CODE: postalCode,
                COUNTRY: country,
            },
            {
                where: {
                    ID:  req.params.ID
                }
            })
            .then((data => {
                return res.status(200).send(data);
            }))
            .error((err) => {
                return res.status(500).send(err);
            })
        }
        catch(ex){
            return res.status(500).send(ex); 
        }
    },
    delete: (req, res) => {
        try{
            return CustomerAddressController.database.destroy({
                where: {
                    ID:  req.params.ID
                }
            })
            .then((data => {
                return res.status(200).send();
            }))
            .error((err) => {
                return res.status(500).send(err);
            })
        }
        catch(ex){
            return res.status(500).send(ex); 
        }
    }
};

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', CustomerAddressController.read);
router.get('/:ID', CustomerAddressController.readByID);
router.post('/', CustomerAddressController.create);
router.put('/:ID', CustomerAddressController.update);
router.delete('/:ID', CustomerAddressController.delete);

module.exports = {
    CustomerAddressController,
    router
};
