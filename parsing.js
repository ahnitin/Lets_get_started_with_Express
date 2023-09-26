
const http =require('http')
const express = require('express');
const bodyParser = require('body-parser');
//const { create } = require('domain');
const app = express();

const adminroute = require('./routes/admin');
const shopRoute = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminroute);
app.use(shopRoute);

// const server = http.createServer(app)

// server.listen(3001);
app.listen(3003);

// npm install  --save body-parser