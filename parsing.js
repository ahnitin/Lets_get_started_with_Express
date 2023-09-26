const path = require('path');
const http =require('http')
const express = require('express');
const bodyParser = require('body-parser');
//const { create } = require('domain');
const app = express();

const adminroute = require('./routes/admin');
const shopRoute = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',adminroute);
app.use(shopRoute);

app.use((req,res,next)=>{
    //res.status(404).send("<h1>Page not found</h1>");
    res.status(404).sendFile(path.join(__dirname,'views','errorpage.html'));
})

// const server = http.createServer(app)

// server.listen(3001);
app.listen(3003);

// npm install  --save body-parser