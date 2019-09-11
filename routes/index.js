var express = require('express');
var router = express.Router();
var indexController = require('../controller/indexController');
/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  //console.log('dirname',__dirname + '/index.html');
   res.sendFile(__dirname + '/index.html');
});
router.post('/addCompany',indexController.addCompany);
router.get('/getCompany',indexController.getCompany);
module.exports = router;
