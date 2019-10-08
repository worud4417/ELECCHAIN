/**
 * main example server 
 * @project ELECCHAIN
 * @author JaeGyeong Lee
 * setting customer source
 * use REST api
 * fort number is 3001
 * http://(ipaddress):3001/customer/~
 */

var express = require("express");
var router = express.Router();

//get customer's schema
var Customer = require('../models/Customer');

/**
 * set customer
 * use POST
 * use JSON
 * @param ID is customer's id
 * @param PASSWORD is customer's password
 * @param NAME is customer's name
 * @param CARNUMBER is customer's carnumber. this is not required
 * @param EMAIL is customer's email
 */
router.post('/',function(req,res,next){

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
        }else{
            return res.status(400).send({error:"id empty"});
        }

        if(req.body.PASSWORD){
            customer.PASSWORD = req.body.PASSWORD;
        }else{
            return res.status(400).send({error:"password empty"});
        }
    
        if(req.body.NAME){
            customer.NAME = req.body.NAME;
        }else{
            return res.status(400).send({error:"name empty"});
        }
    
        customer.CARNUMBER = req.body.CARNUMBER;
    
        if(req.body.EMAIL){
            customer.EMAIL = req.body.EMAIL;
        }else{
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

/**
 * get all customer
 * use GET
 * return json
 */
router.get('/',function(req,res,next){
    Customer.find(function(err,customer){
        if(err){
            return res.status(500).send({error:"database failure"});
        }
        return res.json(customer);
    })
})

/**
 * delete customer
 * use DELETE
 * use JSON
 * @param ID is customer's id
 */
router.delete('/',function(req,res,next){
    Customer.findOne({ID:req.body.ID},function(err,customer){
        if(err){
            return res.status(500).send({error:"database failure"});
        }

        if(customer == null){
            return res.status(400).send({error:"customer not founded"});
        }
        
        Customer.remove({ID:req.body.ID},function(err,customer){
            if(err){
                return res.status(500).send({error:"database failure"});
            }
            return res.status(200).json({result:1});
        })
    })
})

module.exports = router;