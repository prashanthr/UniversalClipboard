var express = require('express'),
	path = require('path'),
	app = express();

app.get('/', function(req,res){
	fileName = path.join(__dirname, '../client/views', 'index.html');
	console.log('file', fileName)
	res.sendFile(fileName);
});

var jsPath = path.join(__dirname, '../client/js')
console.log('jsPath', jsPath);
app.use('/js', express.static(jsPath));

app.listen(3000,function() {
	console.log('Clipboard Server started...');
});