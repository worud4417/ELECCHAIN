/**
 * bank example server 
 * @project ELECCHAIN
 * @author JaeGyeong Lee
 * transaction source
 * use REST api
 * fort number is 3000
 * http://(ipaddress):3000/transaction/~
 */

var express = require("express");
var router = express.Router();

// get role Schema for use to mongodb
var Role = require('../models/role');

/**
 * transaction between account
 * use POST
 * use JSON
 * @param REMITTERACCOUNT is remitter's account
 * @param RECIPIENTACCOUNT is recipient's account
 * @param AMOUNT is transaction amount
 */
router.post('/',function(req,res,next){

    REMITTERACCOUNT = req.body.REMITTERACCOUNT;
    RECIPIENTACCOUNT = req.body.RECIPIENTACCOUNT;
    AMOUNT = req.body.AMOUNT;

    Role.findOne({ACCOUNT:REMITTERACCOUNT},function(err,obj){
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
                return res.status(500).json({error:'failed to update'});
            }
            Role.findOne({ACCOUNT:RECIPIENTACCOUNT},function(err,obj){
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
                    return res.status(201).json({message:'transaction success'});
                })
            })
        })
    })
});

module.exports = router;