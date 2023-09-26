const express = require("express");

const router = express.Router();


router.get('/',(req, res,next)=>{
    //console.log("In the another Middleware!")
    res.send("<h1>Hello to the Express</h1>");
})
// router.use('/',(req, res,next)=>{
//     //console.log("In the another Middleware!")
//     res.send("<h1>Hello to the Express</h1>");
// })
module.exports = router;