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
		fs.readFile('app/public/home.html', 'utf8', function (err, data) {
			if (err) throw err;
			res.send(data);

		});
	});
}

module.exports = route;
