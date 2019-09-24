var express = require("express");
var router = express.Router();

var Custmoer = require('../models/Customer');

router.post('/login',function(req,res,next){
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
        console.log(typeof(obj));
        return res.status(200).json({result:true,user:obj});
    })
})

module.exports = router;