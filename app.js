const http =require('http')
const express = require('express');
const { create } = require('domain');

 
const app = express();

app.use((req, res,next)=>{
console.log("In the Middleware!")
next();
})
app.use((req, res,next)=>{
console.log("In the another Middleware!")
res.send("<h1>Hello to the Express</h1>");
})
// const server = http.createServer(app)

// server.listen(3001);
app.listen(3001);