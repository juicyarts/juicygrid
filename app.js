'use strict';


var express = require('express'),
	app = express(),
	router = express.Router();

app.set('view engine', 'jade');
app.set('views', './public');

app.use(express.static('./public'));

app.get('/', function(req, res) {
	res.send('try <a href="/view/stylus">stylus</a>, <a href="/view/less">less</a> or <a href="/view/sass">sass</a>!')
});

app.get('/view/:page', function(req, res) {
	res.render('./index.jade', {
		title: 'juicy-grid: ' + req.params.page,
		cssSrc: '/' + req.params.page + '/dist/juicy-grid.css'
	});
})

app.get('/test/:page', function(req, res){
	res.render('./test.jade', {
		title: 'juicy-grid test: ' + req.params.page,
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
