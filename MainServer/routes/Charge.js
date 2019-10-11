/**
 * main example server 
 * @project ELECCHAIN
 * @author JaeGyeong Lee
 * setting customer source
 * use REST api
 * fort number is 3001
 * http://(ipaddress):3001/charge/~
 */

var express = require("express");
var router = express.Router();
var fetch = require("node-fetch");

//get bankserver's ipaddress
var ipaddress = require('../utils/IpAddress');
const uri = ipaddress+"/charge";

//set agency account's number
var agencyAccount = null;
(function () {
    agencyAccount = "787878787";
})()

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
router.post('/',async function(req,res,next){
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
        //update customer's charge
    }
    else if(result.message == "amount over"){
        return res.status(400).json({message:"amount over"});
    }
    else{
        return res.status(500).json({message:"server failure"});
    }
})

module.exports = router;