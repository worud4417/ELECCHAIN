var express = require("express");
var router = express.Router();
var fetch = require("node-fetch");

var Agency = require('../models/Agency');
var ipaddress = require('../utils/IpAddress');

const uri = ipaddress+"/transaction";

var agencyAccount = null;

(function () {
    agencyAccount = "787878787";
})()

router.post('/charge',async function(req,res,next){
    var ACCOUNT = req.body.ACCOUNT;
    var AMOUNT = req.body.AMOUNT
    
    var result = await fetch(uri,{
        method:"POST",
        mode: "no-cors",
        cache: "no-cache", 
        credentials: "same-origin",
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            'REMITTERACCOUNT':ACCOUNT,
            'AMOUNT':AMOUNT,
            "RECIPIENTACCOUNT":agencyAccount
        })
    }).then(res=>res.json())
    
    if(result.message == "transaction success"){
        return res.status(200).json({message:"transaction success"});
    }
    else if(result.message == "amount over"){
        return res.status(400).json({message:"amount over"});
    }
    else{
        return res.status(500).json({message:"server failure"});
    }
})

module.exports = router;