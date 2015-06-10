var express=require('express');
	validate = require('form-validate');
var nodemailer = require("nodemailer");
var static = require("serve-static");
var app=express();




/*
SMTP Server Configuration.

*/
var smtpTransport = nodemailer.createTransport("SMTP",{
service: "Gmail",
auth: {
user: "johnny.buma@gmail.com",
pass: "fender311"
}
});
/*------------------SMTP Over-----------------------------*/



app.use(
     "/",
     express.static(__dirname)
);




/*------------------Routing Started ------------------------*/



app.get('/',function(req,res){
res.sendfile('index.html');
});


app.get('/send',function(req,res){


req.Validator.validate()

	
var mailOptions={
from : req.query.from,	
to : req.query.to,
subject : req.query.subject,
text : req.query.text
}

console.log(mailOptions);

smtpTransport.sendMail(mailOptions, function(error, response){
if(error){
console.log(error);
res.end("error");
}else{
console.log("Message sent: " + response.message);
res.end("sent");
}
});
});

/*--------------------Routing Over----------------------------*/

/*app.listen(3000,function(){
console.log("Express Started on Port 3000");
});
*/

app.listen(process.env.PORT || 3000); 

console.log("Express Started on Port 3000")



