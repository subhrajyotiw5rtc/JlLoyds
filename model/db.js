var mongoose = require('mongoose');
const authData =  {
	"useNewUrlParser": true,
	"useCreateIndex": true
};
//connecting local mongodb database named test
mongoose.connect(
  'mongodb://subhra:subhra123@ds139989.mlab.com:39989/hlloyd',
  {useCreateIndex: true, useNewUrlParser: true,useUnifiedTopology: true },
  (err)=>{
    if (!err) console.log('MongoDB connection succeeded.');
    else console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
  }
);

module.exports = mongoose;