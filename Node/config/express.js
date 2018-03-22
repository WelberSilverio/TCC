var express = require("express");
var load = require('express-load');
var bodyParser = require('body-parser');

module.exports = () => {

	var app = express();

	app.set('view engine', 'ejs');
	app.use(bodyParser.urlencoded({extended:true}));
	app.use(bodyParser.json());

	load('./config/db.js')
	.then('models')
	.then('routes')
	.into(app);

	return app;

}