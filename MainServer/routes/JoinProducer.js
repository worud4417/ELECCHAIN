var express = require("express");
var router = express.Router();

var Producer = require('../models/Producer');

router.post('/setProducer',function(req,res,next){

    var producer = new Producer();

    Producer.findOne({ID:req.body.ID},function(err,obj){
        if(err){
            return res.status(500).send({error:"database failure"});
        }
        if(obj != null){
            return res.status(400).send({error:"duplicated id"});
        }
        if(req.body.ID){
            producer.ID = req.body.ID;
        }
        else{
            return res.status(400).send({error:"id empty"});
        }

        if(req.body.PASSWORD){
            producer.PASSWORD = req.body.PASSWORD;
        }
        else{
            return res.status(400).send({error:"password empty"});
        }

        if(req.body.CHARGE){
            producer.CHARGE = req.body.CHARGE;
        }
        else{
            return res.status(400).send({error:"charge empty"});
        }

        producer.save(function(err){
            if(err){
                return res.status(500).send({error:"database failure"});
            }
            return res.status(200).json({result:1});
        })
    })
})

router.get('/producer',function(req,res,next){
    Producer.find(function(err,producer){
        if(err){
            return res.status(500).send({error:"database failure"});
        }
        return res.json(producer);
    })
})

router.post('/removeProducer',function(req,res,next){
    Producer.findOne({ID:req.body.ID},function(err,producer){
        if(err){
            return res.status(500).send({error:"database failure"});
        }

        if(producer == null){
            return res.status(400).send({error:"producer not founded"});
        }
        Producer.remove({ID:req.body.ID},function(err,producer){
            if(err){
                return res.status(500).send({error:"database failure"});
            }
            return res.status(200).json({result:1});
        })
    })
})

module.exports = router;