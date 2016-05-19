var express = require('express'),
	path = require('path'),
	app = express(),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	clipboardController = require('./controllers/clipboard-controller');

mongoose.connect('mongodb://localhost:27017/uc');

app.get('/', function(req,res){
	fileName = path.join(__dirname, '../client/views', 'index.html');
	console.log('file', fileName)
	res.sendFile(fileName);
});

var jsPath = path.join(__dirname, '../client/js')
app.use('/js', express.static(jsPath));

//REST API
app.get('api/clipboard', clipboardController.list);
app.post('api/clipboard', clipboardController.create);

app.listen(3000,function() {
	console.log('Clipboard Server started...');
});