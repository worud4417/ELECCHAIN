var express = require("express");
var router = express.Router();

var Agency = require('../models/Agency');

router.post('/setAgency',function(req,res,next){

    var agency = new Agency();

    Agency.findOne({ID:req.body.ID},function(err,obj){
        if(err){
            return res.status(500).send({error:"database failure"});
        }
        if(obj != null){
             return res.status(400).send({error:"duplicated id"})
        }

        if(req.body.ID){
            agency.ID = req.body.ID;
        }
        else{
            return res.status(400).send({error:"id empty"});
        }

        if(req.body.PASSWORD){
            agency.PASSWORD = req.body.PASSWORD;
        }
        else{
            return res.status(400).send({error:"password empty"});
        }
    
        agency.save(function(err){
            if(err){
                return res.status(500).send({error:"database failure"});
            }
            return res.status(200).json({result:1});
        })
    })
})

router.get('/agency',function(req,res,next){
    Agency.find(function(err,agency){
        if(err){
            return res.status(500).send({error:"database failure"});
        }
        return res.json(agency);
    })
})

router.post('/removeAgency',function(req,res,next){
    Agency.findOne({ID:req.body.ID},function(err,agency){
        if(err){
            return res.status(500).send({error:"database failure"});
        }

        if(agency == null){
            return res.status(400).send({error:"agency not founded"});
        }
        
        Agency.remove({ID:req.body.ID},function(err,agency){
            if(err){
                return res.status(500).send({error:"database failure"});
            }
            return res.status(200).json({result:1});
        })
    })
})

module.exports = router;