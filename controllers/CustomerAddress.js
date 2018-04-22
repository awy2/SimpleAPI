// UserController.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require('../models');

router.use(bodyParser.urlencoded({ extended: true }));

router.post('/', (req, res) => {

    const { body = {} } = req;

    const { STREET_ADDRESS: streetAddress = null } = body;
    const { POSTAL_CODE: postalCode = null } = body;
    const { COUNTRY: country = null } = body;
    const { CUSTOMER_ID: customerID = null } = body;

    db.models.Customer_Addresse.create({
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
});

router.put('/', (req, res) => {
    
    const { body = {} } = req;

    const { STREET_ADDRESS: streetAddress = null } = body;
    const { POSTAL_CODE: postalCode = null } = body;
    const { COUNTRY: country = null } = body;
    const { CUSTOMER_ID: customerID = null } = body;

    db.models.Customer_Addresse.update({
        STREET_ADDRESS: streetAddress,
        POSTAL_CODE: postalCode,
        COUNTRY: country,
    },
    {
        where: {
            id:  req.body.ID
        }
    })
    .then((data => {
        return res.status(200).send(data);
    }))
    .error((err) => {
        return res.status(500).send(err);
    })
});



router.delete('/:id', (req, res) => {
    db.models.Customer_Addresse.destroy({
        where: {
            id:  req.params.id
        }
    })
    .then((data => {
        return res.status(200);
    }))
    .error((err) => {
        return res.status(500).send(err);
    })
});


router.get('/', (req, res) => {
    db.models.Customer_Addresse.findAll()
    .then((data => {
        let results = data.map((row => {return row.dataValues}));
        return res.status(200).send(results);
    }))
    .error((err) => {

        return res.status(500).send(err);
    })
});

module.exports = router;
