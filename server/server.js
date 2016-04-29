/**
 * Module dependencies.
 */

var express = require('express'),
auth           = require('./routes/auth'),
// , projet = require('./routes/projet')
// , ressource = require('./routes/ressource')
bodyParser = require('body-parser'), 
methodOverride = require('method-override'),
path = require('path');
// var mysql = require("mysql");
app = express(),

cookieParser = require('cookie-parser'),
session = require('express-session'),
csrf = require('csurf'), 
passport = require('passport'),
LocalStrategy = require('passport-local').Strategy,
isLoggedIn =false,
//localUser,
port           = process.env.SERVER_PORT || 9000;

// Configuration Passport
var localUser = {
	id : 1,
	username : 'Sfeir',
	password : 'Rocks'
};
passport.use(new LocalStrategy(function(username, password, next) {
	if (!username || !password) {
		return next(null, false);
	}
	if (username === localUser.username && password === localUser.password) {
		return next(null, localUser);
	} else {
		return next(null, false);
	}
}));

passport.serializeUser(function(user, next) {
	next(null, localUser.id);
});

passport.deserializeUser(function(id, next) {
	next(null, localUser);
});

isLoggedIn = function(req, res, next) {
	if (!req.isAuthenticated()) {
		var err = new Error();
		err.status = 401;
		return next(err);
	}
	next();
};

// Configuration
app.set('port', port);
app.use(bodyParser());
app.use(cookieParser());
app.use(csrf({
	cookie : true
}));
app.use(session({
	secret : 'SfeirRocks',
	resave : false,
	saveUninitialized : false
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next) {
	// res.cookie('XSRF-TOKEN', req.csrfToken());
	res.cookie('SfeirToken', req.csrfToken());
	next();
});

// app.use(methodOverride());
app.use(express.static(path.join(__dirname, '..', '.tmp')));

// JSON AUTH
app.get('/server/auth', function(req, res) {
	if (!req.isAuthenticated()) {
		res.status(200).json({
			error : 'Not Authenticated'
		});
	}
	res.status(200).json({
		user : req.user
	});
});
app.post('/server/auth', passport.authenticate('local'), function(req, res) {
	res.status(200).json({
		user : req.user
	});
});
app.get('/server/auth/logout', function(req, res) {
	req.logout();
	res.redirect('/');
});

//app.set('port', 9000);
//app.use(bodyParser());
// app.use(methodOverride());
app.use(express.static(path.join(__dirname, '..', '.tmp')));
app.use(express.static(path.join(__dirname, '..', 'app')));

// app.get('/api/projets', projet.findAll);
// app.get('/api/projets/:id', projet.findById);
// app.post('/api/projets', projet.addProjet);
// app.put('/api/projets/:id', projet.updateProjet);
// app.delete('/api/projets/:id', projet.deleteProjet);
// app.get('/api/ressources', ressource.findAllRessouce);
// app.get('/api/ressources/:id', ressource.findByIdRes);
// app.post('/api/ressources', ressource.addRessource);
// app.put('/api/ressources/:id', ressource.updateRessource);
// app.delete('/api/ressources/:id', ressource.deleteRessource);
module.exports = app;

console.log('Express server listening on port ' + app.get('port'));
