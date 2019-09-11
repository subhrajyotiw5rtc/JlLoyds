var express = require('express');
var router = express.Router();
var adminController = require('../controller/adminController');

/* GET company listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
   res.sendFile(__dirname + '/admin/index.html');
});
router.get('/getCompany',adminController.getCompany);
router.post('/editCompany',adminController.editCompany);
router.post('/updateCompany',adminController.updateCompany);
router.post('/updateCompanyStatus',adminController.updateCompanyStatus);

module.exports = router;