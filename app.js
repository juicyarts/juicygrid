'use strict';


var express = require('express'),
	app = express(),
	router = express.Router();

app.set('view engine', 'jade');
app.set('views', './public');

app.use(express.static('./public'));

app.get('/', function(req, res) {
	res.send('try <a href="/stylus">stylus</a>, <a href="/less">less</a> or <a href="/sass">sass</a>!')
});

app.get('/:page', function(req, res) {
	res.render('./index.jade', {
		title: 'juicy-grid: ' + req.params.page,
		cssSrc: '/' + req.params.page + '/dist/juicy-grid.css'
	});
})
var port = function(){
	if (process.env.NODE_ENV === 'test'){
		return 4000;
	} 

	return 3000;
};

app.listen(port(), function(){
	console.log('running on localhost:', port());
});
