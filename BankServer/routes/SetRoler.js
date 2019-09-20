var express = require("express");
var router = express.Router();

var Producer = require('../models/Producer');

router.post('/producer',function(req,res,next){
    var producer = new Producer();
    producer.ID = req.body.ID;
    producer.ACCOUNT = req.body.ACCOUNT;
    producer.BALANCE = req.body.BALANCE;

    producer.save(function(err){
        if(err){
            console.error(err);
            res.json({result:0});
            return;
        }
        res.json({result:1});
    })
});

router.get('/producer',function(req,res,next){
    Producer.find(function(err,producer){
        if(err){
            return res.status(500).send({error:"database failure"});
        }
        res.json(producer);
    })
})

module.exports = router;