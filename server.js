var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var Article = require('./models/articles.js');
var app = express();
var PORT = process.env.PORT || 3000;


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

app.use(express.static('./public'));

mongoose.connect('mongodb://admin:admin1@ds133814.mlab.com:33814/nytarticles_db');
var db = mongoose.connection;

db.on('error', function(err){
	console.log("Mongoose Error", err);
});

db.once('open', function(){
	console.log("Mongoose connection successful.");
});



app.get('/', function(req,res){
	res.sendFile('./public/index.html');
});

app.get("/api", function(req,res){
	Article.find({}).exec((err,doc) => {
		if (err) return console.log(err);
		res.send(doc);
	});
});

app.post("/api", function(req,res){
	Article.create({
		"title": req.body.headline.main,
		"snippet": req.body.snippet,
		"date": Date.now(),
		"url": req.body.web_url
	},function(err){ if (err) throw err;})

});


app.listen(PORT, function(){
	console.log("Listening on port: " +  PORT);
});