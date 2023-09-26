const express = require("express");

const router = express.Router();

router.get('/app-product',(req, res,next)=>{
    //console.log("In the Middleware!")
    res.send("<form action='/product' method='POST'><input type='text' name='title'><input type='text' name='size'><button type='submit'>Add Product</button></form>");
    })
    
router.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect("/");
})

module.exports = router;