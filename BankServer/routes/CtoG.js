var express = require("express");
var router = express.Router();

router.post('/',function(req,res,next){
    console.log("ID:"+req.body.ID+"\nACCOUNT:"+req.body.ACCOUNT+"\nBALANCE:"+req.body.BALANCE)
    mongoose.
    
    res.send('success')
})

module.exports = router;