var express = require("express");
var router = express.Router();

var Producer = require('../models/Producer');

router.post('/',function(req,res,next){

    REMITTERACCOUNT = req.body.REMITTERACCOUNT;
    RECIPIENTACCOUNT = req.body.RECIPIENTACCOUNT;
    AMOUNT = req.body.AMOUNT;

    Producer.findOne({ACCOUNT:REMITTERACCOUNT},function(err,obj){
        if(err){
            return res.status(500).send("database failure");
        }
        if(obj==null){
            return res.status(400).send({message:"remitter is not founded"});
        }
        if(obj.BALANCE<AMOUNT){
            return res.status(400).send({message:"amount over"})
        }

        obj.BALANCE = obj.BALANCE-AMOUNT;
        obj.save(function(err){
            if(err){
                res.status(500).json({error:'failed to update'});
            }
        })

        Producer.findOne({ACCOUNT:RECIPIENTACCOUNT},function(err,obj){
            if(err){
                return res.status(500).send("database failure");
            }
            if(obj == null){
                return res.status(400).json({message:"recipient is not founded"});
            }
            obj.BALANCE = obj.BALANCE+AMOUNT;
            obj.save(function(err){
                if(err){
                    return res.status(500).json({error:'failed to update'});
                }
                return res.status(200).json({message:'transaction success'});
            })
        })
    })
});

module.exports = router;