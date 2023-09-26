const path = require('path');
const express = require("express");

const router = express.Router();


router.get('/',(req, res,next)=>{
    //console.log("In the another Middleware!")
    //res.send("<h1>Hello to the Express</h1>");
    //res.sendFile('F:\NODE JS\Lets_get_started_with_Express\views\shop.html')
    res.sendFile(path.join(__dirname,'../','views','shop.html'));
})
// router.use('/',(req, res,next)=>{
//     //console.log("In the another Middleware!")
//     res.send("<h1>Hello to the Express</h1>");
// })
module.exports = router;