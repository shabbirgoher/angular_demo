var express = require("express");
var app = express();
var r = require("request");
var request = r.defaults({
    strictSSL: false,
    tunnel: true,
    maxRedirects: 100,
    timeout: 10000000,
    jar: true
});

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rest_services');

var userDao = require("./dao/userDao")(mongoose);
// userDao.getKey("breezo").then(function(key){
// 	console.log(key);
// });

function reqeuestOptions(key) {
	return {url: "http://api-beta.breezometer.com/baqi/?lat=40.7324296&lon=-73.9977264&key="+key};
}

function getService(req, res){
	var url = "";

	userDao.getKey("breezo").then(function(key){
		req.pipe(request.get(reqeuestOptions(key))).pipe(res);
	});
}

app.get("/proxyserve/breezo", function(req, res, next) {
	getService(req, res);
	//res.send("helo");
});
module.exports = app;