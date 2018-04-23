const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const CustomerController = {
    database: db.Customer,
    create: (req, res) => {
        try{
            return CustomerController.database.create({
                NAME: req.body.NAME
            })
            .then(((data) => {
                return res.status(200).send(data);
            }))
            .catch((err) => {
                return res.status(500).send(err);
            })
        }
        catch(ex){
            return res.status(500).send(ex);
        }
    },
    read: (req, res) => {
        try{
            return CustomerController.database.findAll()
            .then((data => {
                let results = data.map((row => {return row.dataValues}));
                return res.status(200).send(results);
            }))
            .catch((err) => {
                return res.status(500).send(err);
            })
        }
        catch(ex){
            return res.status(500).send(ex);
        }

    },
    readByID: (req, res) => {
        try{
            return CustomerController.database.findAll({
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
            .catch((err) => {
                return res.status(500).send(err);
            })
            return promise;
        }
        catch(ex){
            return res.status(500).send(ex);
        }
    },
    update: (req, res) => {
        try{
            return CustomerController.database.update({
                NAME: req.body.NAME
            },
            {
                where: {
                    ID:  req.params.ID
                }
            })
            .then((data => {
                return res.status(200).send(data);
            }))
            .catch((err) => {
                return res.status(500).send(err);
            })
        }
        catch(ex){
            return res.status(500).send(ex);
        }
    },
    delete: (req, res) => {
        try{
            return CustomerController.database.destroy({
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
router.get('/', CustomerController.read);
router.get('/:ID', CustomerController.readByID);
router.post('/', CustomerController.create);
router.put('/:ID', CustomerController.update);
router.delete('/:ID', CustomerController.delete);

module.exports = {
    CustomerController,
    router
};
