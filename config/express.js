var express = require('express');
var config = require('./config'),
    bodyParser = require('body-parser');

module.exports = function () {
    var app = express();
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());

    app.set('views', './app/views');
    app.set('view engine', 'ejs');

    require('../app/routes/index.server.routes.js')(app);
    require('../app/routes/smile.server.routes.js')(app);

    app.use(express.static('./public'));

    return app;
};