var express = require('express');
var app = express();
var userRouters = require('./users')

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/routeUser',userRouters)


app.listen(7000, ()=> {
  console.log('server running...')
});
