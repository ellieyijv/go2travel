var express = require("express");
var nodemailer = require('nodemailer');
var bodyparser = require("body-parser");

var app = express();

var transporter = nodemailer.createTransport({
	host: process.env.Email_Host,
	auth:{
		user: process.env.Email_User,
		pass: process.env.Email_Pass
	},
	port:'25',
});


app.post('/contactus', (req, res)=>{
	
	if(req.body.email && req.body.phone && req.body.name){
		let mailBody = {
			from: req.body.email,
			to: process.env.Email_To,
			subject: 'Sending Email using Node.js',
			text: `this is the message from ${req.body.msg}`
		};
	
		transporter.sendMail(mailBody, function(error, info){
			if(error) {
				res.status(responseCode).json(response);
			}else {
				res.status(200).json({'message': 'success'})
			}
		});
	}else{
		res.status(500).json({'message': 'please fill in the required'})
	}
			
})


module.exports = {
	path: "/api/sendemail",
	handler: app
};