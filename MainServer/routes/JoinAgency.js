/**
 * main example server 
 * @project ELECCHAIN
 * @author JaeGyeong Lee
 * setting agency source
 * use REST api
 * fort number is 3001
 * http://(ipaddress):3001/agency/~
 */
var express = require("express");
var router = express.Router();

//get agency's schema
var Agency = require('../models/Agency');

/**
 * set agency
 * use POST
 * use JSON
 * @param ID is agency's id
 * @param PASSWORD is agency's password
 */
router.post('/',function(req,res,next){

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

/**
 * get all agency
 * use GET
 * return JSON
 * no param
 */
router.get('/',function(req,res,next){
    Agency.find(function(err,agency){
        if(err){
            return res.status(500).send({error:"database failure"});
        }
        return res.json(agency);
    })
})

/**
 * delete agency
 * use DELETE
 * use JSON
 * @param ID is agency's id
 */
router.delete('/',function(req,res,next){
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