// UserController.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require('../models');

router.use(bodyParser.urlencoded({ extended: true }));

router.post('/', (req, res) => {
    db.models.Customer.create({
        NAME: req.body.NAME
    })
    .then(((data) => {
        return res.status(200).send(data);
    }))
    .error((err) => {
        return res.status(500).send(err);
    })
});

router.put('/:id', (req, res) => {
    db.models.Customer.update({
        NAME: req.body.NAME
    },
    {
        where: {
            id:  req.params.id
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
    db.models.Customer.destroy({
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

router.get('/', function(req, res) {
    console.log(req)
    db.models.Customer.findAll()
    .then((data => {
        console.log(data)
        let results = data.map((row => {return row.dataValues}));
        return res.status(200).send(results);
    }))
    .error((err) => {
        return res.status(500).send(err);
    })
});

module.exports = router;
