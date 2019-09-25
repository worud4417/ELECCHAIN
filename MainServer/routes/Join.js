var express = require("express");
var router = express.Router();

var Customer = require('../models/Customer');

router.post('/setCustomer',function(req,res,next){

    var customer = new Customer();

    Customer.findOne({ID:req.body.ID},function(err,obj){
        if(err){
            return res.status(500).send({error:"database failure"});
        }
        if(obj != null){
             return res.status(400).send({error:"duplicated id"})
        }

        if(req.body.ID){
            customer.ID = req.body.ID;
        }
        else{
            return res.status(400).send({error:"id empty"});
        }

        if(req.body.PASSWORD){
            customer.PASSWORD = req.body.PASSWORD;
        }
        else{
            return res.status(400).send({error:"password empty"});
        }
    
        if(req.body.NAME){
            customer.NAME = req.body.NAME;
        }
        else{
            return res.status(400).send({error:"name empty"});
        }
    
        customer.CARNUMBER = req.body.CARNUMBER;
    
        if(req.body.EMAIL){
            customer.EMAIL = req.body.EMAIL;
        }
        else{
            return res.status(400).send({error:"email empty"});
        }
    
        customer.save(function(err){
            if(err){
                return res.status(500).send({error:"database failure"});
            }
            return res.status(200).json({result:1});
        })
    })
})

router.get('/customer',function(req,res,next){
    Customer.find(function(err,customer){
        if(err){
            return res.status(500).send({error:"database failure"});
        }
        return res.json(customer);
    })
})

router.post('/removeCustomer',function(req,res,next){
    Customer.findOne({ID:req.body.ID},function(err,customer){
        if(err){
            return res.status(500).send({error:"database failure"});
        }

        if(customer == null){
            return res.status(400).send({error:"customer not founded"});
        }
    }).then(function(){
        Customer.remove({ID:req.body.ID},function(err,customer){
            if(err){
                return res.status(500).send({error:"database failure"});
            }
            return res.status(200).json({result:1});
        })
    })
})

module.exports = router;