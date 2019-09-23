var express = require("express");
var router = express.Router();

var Producer = require('../models/Producer');

router.post('/',function(req,res,next){

    REMITTERID = req.body.REMITTERID;
    RECIPIENTID = req.body.RECIPIENTID;
    AMOUNT = req.body.AMOUNT;

    Producer.findOne({ID:REMITTERID},function(err,obj){
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

        Producer.findOne({ID:RECIPIENTID},function(err,obj){
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
                return res.json({message:'transaction success'});
            })
        })
    })
});

module.exports = router;