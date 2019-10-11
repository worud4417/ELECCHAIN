/**
 * main example server 
 * @project ELECCHAIN
 * @author JaeGyeong Lee
 * login source
 * use REST api
 * fort number is 3001
 * http://(ipaddress):3001/login/~
 */

var express = require("express");
var router = express.Router();

//get customer's schema
var Custmoer = require('../models/Customer');

/**
 * login customer
 * use POST
 * use JSON
 * @param ID is customer's id
 * @param PASSWORD is customer's password
 */
router.post('/',function(req,res,next){
    Custmoer.findOne({ID:req.body.ID},function(err,obj){
        if(err){
            return res.status(500).send({error:"database failure"});
        }

        if(obj == null){
            return res.status(400).send({error:"id not founded"});
        }

        if(obj.PASSWORD != req.body.PASSWORD){
            return res.status(400).send({error:"password wrong"});
        }
        return res.status(200).json({result:true,EMAIL:obj.EMAIL,ID:obj.ID,NAME:obj.NAME});
    })
})

module.exports = router;