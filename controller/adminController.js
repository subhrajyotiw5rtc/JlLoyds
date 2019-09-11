var mongoose = require('mongoose');
var mden = require('md5');
var User =  require('../model/model.admin');
var Company =  require('../model/model.index');

//List of company
module.exports.getCompany = (req, res, next) =>{
	Company.collection.aggregate([
		{ $sort : { _id : -1} }

    ])
    .toArray((err, docs)=>{
    	if (!err) {
			//console.log('docs',docs);
			if (docs && docs.length > 0) {
				var data={'status':200,'data':docs};
				res.send(data);
			}else{
				var data={'status':400,'data':[]};
				res.send(data);
			}
		}else{
			console.log('err',err);
		}
    })
}
//Get company as per id.
module.exports.editCompany = (req, res, next) =>{
	var id=req.body.id;
	Company.find({_id: id},(err, docs) => {
		if (!err) {
			//console.log('docs',docs);
			if (docs && docs.length > 0) {
				var data={'status':200,'data':docs};
				res.send(data);
			}else{
				var data={'status':400,'data':[]};
				res.send(data);
			}
		}else{
			console.log('err',err);
		}
	})
}
//Update company
module.exports.updateCompany = (req, res, next) =>{
	var fname=req.body.fname;
	var lname=req.body.lname;
	var email=req.body.email;
	var cname=req.body.cname;
	var sDate=req.body.sDate;
	var eDate=req.body.eDate;
	var status=req.body.status;
	var id=req.body.id;
	console.log('inputs',id);
	var comp=new Company({
		fname:fname,
		lname:lname,
		email:email,
		cname:cname,
		sdate:sDate,
		edate:eDate,
		status:status
	})
	var upsertData = comp.toObject();
	delete upsertData._id;
	Company.find({ _id: { $ne: id },cname:cname},(err, docs) => {
		if (!err) {
    		//console.log('docsu',docs);
    		if (docs && docs.length==0) {
    			Company.update({_id:id},{$set:upsertData},{upsert: true},(err1,data) =>{
    				if (!err1) {
						if (data) {
							var respon={'status':1,"msg":"Updated Successfully.."};
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
//update company status.
module.exports.updateCompanyStatus = (req, res, next) =>{
	var status=req.body.status;
	var id=req.body.id;
	//console.log('inputs',fname,lname,email,cname,sDate,eDate);
	var comp=new Company({
		status:status
	})
	var upsertData = comp.toObject();
	delete upsertData._id;
	Company.update({_id:id},{$set:upsertData},{upsert: true},(err1,data) =>{
		if (!err1) {
			if (data) {
				var respon={'status':1,"msg":"Updated Successfully.."};
				res.send(respon)
			}
		}else{
			console.log('err1',err1);
		}
	})
}