var express = require("express");
var router = express.Router();

var Customer = require('../models/Customer');

router.post('/getBalance',function(req,res,next){
    
    Customer.findOne({ID:req.body.ID},function(err,obj){
        if(err){
            return res.status(500).send({error:"database failure"});
        }

        if(!obj){
            return res.status(400).send({error:"customer not founded"});
        }

       var customer = {
           ID:obj.ID,
           NAME:obj.NAME,
           BALANCE:obj.COIN
       }

       return res.status(200).json(customer);
    })
})

module.exports = router;