
var express = require('express');
var app = express();
var dataFile = require('./data/data.json');
var reload = require('reload');

app.set('port', process.env.PORT || 3000);
app.set('appData', dataFile);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.locals.siteTitle = 'Roux Meetups';
app.locals.allSpeakers = dataFile.speakers;

app.use(express.static('app/public'))
app.use(require('./routes/index1.js'));
app.use(require('./routes/speakers1.js'));
app.use(require('./routes/feedback.js'));
app.use(require('./routes/api.js'));


var server = app.listen(app.get('port'), function(){
	console.log('Listening on my port ' + app.get('port'));
});

reload(server, app);
