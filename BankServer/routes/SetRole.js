/**
 * bank example server 
 * @project ELECCHAIN
 * @author JaeGyeong Lee
 * setting role source
 * use REST api
 * fort number is 3000
 * http://(ipaddress):3000/role/~
 */

var express = require("express");
var router = express.Router();

// get role Schema for use to mongodb
var Role = require('../models/role');

/**
 * set roles
 * use POST
 * use JSON
 * @param ID is account's name
 * @param ACCOUNT is account number
 * @param BALANCE is account's init balance
 */
router.post('/',function(req,res,next){

    var role = new Role();
    role.ID = req.body.ID;
    role.ACCOUNT = req.body.ACCOUNT;
    role.BALANCE = req.body.BALANCE;

    //find duplicated account
    Role.findOne({ACCOUNT:req.body.ACCOUNT},function(err,obj){
        if(err){
            return res.status(500).send("database failure");
        }

        if(obj){
            return res.status(400).send("duplicate account");
        }
        else{
            role.save(function(err){
                if(err){
                    return res.status(500).json({error:"database failure"});
                }
                return res.status(201).json({result:1});
            })
        }
    })
});

/**
 * return all role
 * use GET
 * Not param
 */
router.get('/',function(req,res,next){

    Role.find(function(err,role){
        if(err){
            return res.status(500).send({error:"database failure"});
        }
        return res.status(200).json(role);
    })
})

/**
 * remove role
 * use DELETE
 * use JSON
 * @param ACCOUNT is account number for delete account
 */
router.delete('/',function(req,res,next){

    Role.findOne({ACCOUNT:req.body.ACCOUNT},function(err,obj){
        if(err){
            return res.status(500).send({error:"database failure"});
        }
        if(obj == null){
            return res.status(400).send({error:"Role not founded"});
        }
        else{
            Role.remove({ACCOUNT:req.body.ACCOUNT},function(err,obj){
                if(err){
                    return res.status(500).send({error:"database failure"});
                }
                return res.status(200).json({result:1});
            })
        }
    })
})

module.exports = router;