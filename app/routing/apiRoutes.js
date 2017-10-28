var fs = require('fs');

function route(app) {
	app.get('/api/friends', function (req, res) {
		fs.readFile('app/data/friends.js', 'utf8', function (err, data) {
			if (err) throw err;
			res.send(data);
		});
	});
	//to update the json by writing new user to file
	var updateData = function (newUser, data) {
		data.push(newUser);
		fs.writeFile('app/data/friends.js', JSON.stringify(data));
	};

	app.post('/api/friends', function (req, res) {
		fs.readFile('app/data/friends.js', 'utf8', function (err, data) {
			if (err) throw err;
			var data = JSON.parse(data);


			if (data.length === 0) {
				res.send("No matches available");
			} else {
				//FOR LOOP GOES HERE AND COMPARES ALL EXISTING USERS WITH MY NEW USER ON HAND.
				//FINDS BEST MATCH USING TOTAL DIFFERENCE ALGORITHM
				res.send("We have found yourmatch!")
			}


			//UPDATES JSON BY WRITING NEW USER TO FILE
			updateData(req.body, data);
		});
	});
}

module.exports = route;
