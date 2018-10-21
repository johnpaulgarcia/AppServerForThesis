const ITransaction = require('../models/inventoryTransaction');
const Staff = require('../models/staffschema');

exports.itransact = function(req,res,next){
	


	let dte = new Date();
	let wk;
	let wk_ = dte.getDate()/7;
	console.log(wk_);
	if(wk_<1){
		wk=1;
	}
	if((wk_<2 || wk_===2) && wk_>1){
		wk=2;
	}
	if((wk_<3||wk_===2) && wk_>2){
		wk=3;
	}
	if((wk_<4 && wk_>3)||wk>=4){
		wk=4;
	}




	let itransaction = new ITransaction({
		...req.body,
		week: wk,
		day: dte.getDate(),
		month: dte.getMonth()+1,
		year: dte.getFullYear(),
		hour: dte.getHours(),
		minute: dte.getMinutes(),
	});


		itransaction.save(function(err){
			if(err){return next(err)}
			res.json("Saved");
		})
	


}

exports.getTransact = function(req,res,next){
	ITransaction.find({},function(err,itransact){
		if(err){return next(err)}
		res.json({itransact});
	})
}

exports.customerHere = function(req,res,next){
	let {
		_id
	} = req.body;

	Staff.update({'appointment._id':_id},{$set:{'appointment.$.ishere':'true'}},function(err,resx){
		if(err){return next(err)}
		res.json(resx)
	})
}

