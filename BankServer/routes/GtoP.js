var express = require("express");
var router = express.Router();

var Producer = require('../models/Producer')

router.post('/',function(req,res,next){
    console.log("ID:"+req.body.ID+"\nACCOUNT:"+req.body.ACCOUNT+"\nBALANCE:"+req.body.BALANCE);
    
    var producer = new Producer();

    res.send('success')
});

module.exports = router;