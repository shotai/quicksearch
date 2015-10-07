var express = require('express');
var engines = require('consolidate');
var app = new express();
var http = require('http');
app.set('port', process.env.PORT || 9000);
app.set('views', __dirname + '/testpage');
app.use(express.static(__dirname));
app.engine('html', engines.handlebars);
app.set('view engine', 'html');

app.get('/', function(req, res) {
    res.render('testpage.html');
});
var httpListener = http.createServer(app);
httpListener.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});