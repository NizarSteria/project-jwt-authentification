 
/**
 * Module dependencies.
 */

var express = require('express')
  // , projet = require('./routes/projet')
    , ressource = require('./routes/ressource')
    , bodyParser = require('body-parser')
    , methodOverride = require('method-override')
    , path = require('path');
var mysql = require("mysql");
var app   = express();


var connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : 'root',
	  database : 'outilgestion'
	});
connection.connect(function(error){
	  if(error)    {
	      console.log("Problem with MySQL"+error);
	  } else {
	      console.log("Connected with Database");
	   }
	});

/*
 * GET projets listing.
 */
app.get('/projets',function(req,res){
	  connection.query("SELECT * from projet",function(err,rows){
	    if(err) {
	        console.log("Problem with MySQL"+err);
	      } else {
	    	 // console.log("liste des projets" +JSON.stringify(rows));
	          res.end(JSON.stringify(rows));
	      }
	  });
	});

/*
 * GET projets by id.
 */
app.get('/projets/:idProjet',function(req,res){
	  connection.query("SELECT * from projet where idProjet = "+req.params.idProjet
			  ,function(err,rows){
	    if(err) {
	        console.log("Problem with MySQL"+err);
	      } else {
	          res.end(JSON.stringify(rows));
	      }
	  });
	});

/* Save the projet */
exports.save = function(req,res){    
    var input = JSON.parse(JSON.stringify(req.body));    
    req.getConnection(function (err, connection) {        
        var data = {            
        		codeProjet    : input.codeProjet,
        		dateDebut     : input.dateDebut,
        		dateFin   	  : input.dateFin,
        		descProjet    : input.descProjet,
        		budgetTotal   : input.budgetTotal
         };
        var query = connection.query("INSERT INTO projet set ? ",data, function(err, rows)
        {
          if (err)
              console.log("Error inserting : %s ",err );         
          res.redirect('/projets');          
        });        
       // console.log(query.sql); get raw query
     });
};
app.set('port', 9000);
app.use(bodyParser());
// app.use(methodOverride());
app.use(express.static(path.join(__dirname, '..', '.tmp')));
app.use(express.static(path.join(__dirname, '..', 'app')));

// app.get('/api/projets', projet.findAll);
// app.get('/api/projets/:id', projet.findById);
// app.post('/api/projets', projet.addProjet);
// app.put('/api/projets/:id', projet.updateProjet);
// app.delete('/api/projets/:id', projet.deleteProjet);
app.get('/api/ressources', ressource.findAllRessouce);
app.get('/api/ressources/:id', ressource.findByIdRes);
app.post('/api/ressources', ressource.addRessource);
app.put('/api/ressources/:id', ressource.updateRessource);
app.delete('/api/ressources/:id', ressource.deleteRessource);
module.exports = app;

console.log('Express server listening on port ' + app.get('port'));


