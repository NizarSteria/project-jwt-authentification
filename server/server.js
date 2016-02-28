 
/**
 * Module dependencies.
 */

var express = require('express')
    , user = require('./routes/user')
    , bodyParser = require('body-parser')
    , methodOverride = require('method-override')
    , path = require('path');

var app = express();

app.set('port', 9000);
app.use(bodyParser());
//app.use(methodOverride());
app.use(express.static(path.join(__dirname, '..', '.tmp')));
app.use(express.static(path.join(__dirname, '..', 'app')));

app.get('/api/users', user.findAll);
app.get('/api/users/:id', user.findById);
app.post('/api/users', user.addUser);
app.put('/api/users/:id', user.updateUser);
app.delete('/api/users/:id', user.deleteUser);

module.exports = app;

console.log('Express server listening on port ' + app.get('port'));