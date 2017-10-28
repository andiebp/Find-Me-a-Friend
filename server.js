var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
	extended: true
}));

var apiRoutes = require('./app/routing/apiRoutes');
var htmlRoutes = require('./app/routing/htmlRoutes');

apiRoutes(app);
htmlRoutes(app);

app.listen(port, function () {
	console.log("Server is running on port", port);
});
