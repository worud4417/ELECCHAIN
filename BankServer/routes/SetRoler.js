var express = require("express");
var router = express.Router();

var Producer = require('../models/Producer');

router.post('/setRoler',function(req,res,next){
    var producer = new Producer();
    producer.ID = req.body.ID;
    producer.ACCOUNT = req.body.ACCOUNT;
    producer.BALANCE = req.body.BALANCE;

    producer.save(function(err){
        if(err){
            console.error(err);
            res.json({result:0});
            return;
        }
        res.json({result:1});
    })
});

router.get('/roler',function(req,res,next){
    Producer.find(function(err,producer){
        if(err){
            return res.status(500).send({error:"database failure"});
        }
        res.json(producer);
    })
})

router.post('/removeRoler',function(req,res,next){
    Producer.findOne({ID:req.body.ID},function(err,obj){
        if(err){
            return res.status(500).send({error:"database failure"});
        }
        
        if(obj == null){
            return res.status(400).send({error:"Roler not founded"});
        }
        
        Producer.remove({ID:req.body.ID},function(err,obj){
            if(err){
                return res.status(500).send({error:"database failure"});
            }
            res.json({message:"Roler deleted"});
            res.status(204).end();
        })
    })
})

router.post('/updateRoler',function(req,res,next){
    Producer.findOne({ID:req.body.ID},function(err,obj){
        if(err){
            return res.status(500).send({error:"database failure"});
        }
        
        if(obj == null){
            return res.status(400).send({error:"Roler not founded"});
        }

        if(req.body.ID){
            obj.ID = req.body.ID;
        }
        if(req.body.ACCOUNT){
            obj.ACCOUNT = req.body.ACCOUNT;
        }
        if(req.body.BALANCE){
            obj.BALANCE = req.body.BALANCE;
        }

        obj.save(function(err){
            if(err){
                res.status(500).json({error:'failed to update'});
            }
            res.json({message:'roler update'})
        })
    })
})

module.exports = router;