var express = require('express');
var router = express.Router();


router.get('/users', function(req, res, next) {
  res.json([
    {id:1, name:'Anubhav'},
    {id:2, name:'Niraj'},
    {id:3, name:'Ekanse'},
    {id:4, name:'Divanse'}
  ])
});


module.exports = router;
