var mongoose = require('mongoose');
var Company =  require('../model/model.index');


// Register company
module.exports.addCompany = (req, res, next) =>{
	var fname=req.body.fname;
	var lname=req.body.lname;
	var email=req.body.email;
	var cname=req.body.cname;
	var sDate=req.body.sDate;
	var eDate=req.body.eDate;
	var status=0;
	//console.log('inputs',fname,lname,email,cname,sDate,eDate);
	var comp=new Company({
		fname:fname,
		lname:lname,
		email:email,
		cname:cname,
		sdate:sDate,
		edate:eDate,
		status:status
	})
	Company.find({cname:cname},(err, docs) => {
		if (!err) {
			if (docs && docs.length==0) {
				comp.save((err1,data) =>{
					if (!err1) {
						if (data) {
							var respon={'status':1,"msg":"Added Successfully.."};
							res.send(respon)
						}
					}else{
						console.log('err1',err1);
					}
				})
			}else{
				var respon={'status':0,"msg":"The company you have added is already exist. Please enter some new company name."};
				res.send(respon);
			}
		}else{
			console.log('err',err);
		}
	})
}

//API call to check the company status
module.exports.getCompany = (req, res, next) =>{
	var cname=req.query.cname;
	Company.find({cname:cname},(err, docs) => {
		if (!err) {
			//console.log('docs',docs);
			if (docs && docs.length > 0) {
				res.send("Success");
			}else{
				res.send("False")
			}
		}else{
			console.log('err',err);
		}
	})
}