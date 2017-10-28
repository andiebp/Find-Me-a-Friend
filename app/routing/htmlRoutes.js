var fs = require('fs');

function route(app) {
	app.get('/survey', function (req, res) {
		fs.readFile('app/public/survey.html', 'utf8', function (err, data) {
			if (err) throw err;
			res.send(data);

		});
	});

	app.get('/js/survey.js', function (req, res) {
		fs.readFile('app/public/js/survey.js', 'utf8', function (err, data) {
			if (err) throw err;
			res.send(data);

		});
	});

	app.get('/', function (req, res) {
		res.send('GET request to the homepage');
		console.log('HAAAA!');
	});
}

module.exports = route;
