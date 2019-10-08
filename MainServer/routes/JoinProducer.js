/**
 * main example server 
 * @project ELECCHAIN
 * @author JaeGyeong Lee
 * setting producer source
 * use REST api
 * fort number is 3001
 * http://(ipaddress):3001/producer/~
 */

var express = require("express");
var router = express.Router();

//get producer's schema
var Producer = require('../models/Producer');

/**
 * set producer
 * use POST
 * use JSON
 * @param ID is producer's id
 * @param PASSWORD is producer's password
 * @param CHARGERATE is producer's charge-rate
 */
router.post('/',function(req,res,next){

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
        }else{
            return res.status(400).send({error:"id empty"});
        }

        if(req.body.PASSWORD){
            producer.PASSWORD = req.body.PASSWORD;
        }else{
            return res.status(400).send({error:"password empty"});
        }

        if(req.body.CHARGERATE){
            producer.CHARGERATE = req.body.CHARGERATE;
        }else{
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

/**
 * get all producer
 * use GET
 * return json
 * no param
 */
router.get('/',function(req,res,next){
    Producer.find(function(err,producer){
        if(err){
            return res.status(500).send({error:"database failure"});
        }
        return res.json(producer);
    })
})

/**
 * delete producer
 * use DELETE
 * use JSON
 * @param ID is producer's id
 */
router.delete('/',function(req,res,next){
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