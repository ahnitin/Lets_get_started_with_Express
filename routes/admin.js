const path = require('path');
const express = require("express");

const rootDir = require('../helper/path')

const router = express.Router();

router.get('/add-product',(req, res,next)=>{
    //console.log("In the Middleware!")
    //res.sendFile(path.join(__dirname,'..','views','add-product.html'))
    res.sendFile(path.join(rootDir,'views','add-product.html'))
    
    //res.send("<form action='/admin/add-product' method='POST'><input type='text' name='title'><input type='text' name='size'><button type='submit'>Add Product</button></form>");
    })
    
router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect("/");
})

module.exports = router;