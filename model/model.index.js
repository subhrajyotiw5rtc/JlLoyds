var mongoose = require('mongoose');
var alloc=new mongoose.Schema({
	fname: String,
	lname: String,
	email: String,
	cname: String,
	sdate: String,
	edate: String,
	status: Number,
	date_added: { type: Date, default: Date.now }
})
var Company = mongoose.model('Company', alloc);
module.exports = Company;