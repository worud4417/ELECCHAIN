/**
 * main example server 
 * @project ELECCHAIN
 * @author JaeGyeong Lee
 * get customer's charge balance
 * use REST api
 * fort number is 3001
 * http://(ipaddress):3001/balance/~
 */

var express = require("express");
var router = express.Router();

var Customer = require('../models/Customer');

router.post('/',function(req,res,next){
    
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
           BALANCE:obj.CHARGE
       }

       return res.status(200).json(customer);
    })
})

module.exports = router;