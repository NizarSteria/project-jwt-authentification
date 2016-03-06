var projets = [
		{
			"id" : 0,
			"code" : "code1",
			"date_debut" : "22/03/2014",
			"date_fin" : "25/05/2014",
			"description" : "premier projet ",
			"budget_totale" : "50.250"
		},
		{
			"id" : 1,
			"code" : "code2",
			"date_debut" : "08/04/2014",
			"date_fin" : "23/05/2014",
			"description" : "secont projet",
			"budget_totale" : "60.500"
		},
		{
			"id" : 2,
			"code" : "code3",
			"date_debut" : "13/08/2014",
			"date_fin" : "02/10/2014",
			"description" : "troiscième projet",
			"budget_totale" : "55.180"
		},
		{
			"id" : 3,
			"code" : "code4",
			"date_debut" : "22/02/2015",
			"date_fin" : "23/05/2015",
			"description" : "projet 4",
			"budget_totale" : "23.450"
		},
		{
			"id" : 4,
			"code" : "code5",
			"date_debut" : "14/04/2015",
			"date_fin" : "14/05/2015",
			"description" : "projet 5",
			"budget_totale" : "63.500"
		} ];

var id = 1;

/*
 * GET projets listing.
 */
exports.findAll = function(req, res){
    res.status(200).json(projets);
};

/*
 * GET projet by identifier.
 */
exports.findById = function(req, res){
    var id = req.params.id;

    for(var i = 0; i < projets.length; i++){
        if(projets[i].id == id){
            res.status(200).json(projets[i]);
        }
    }
    res.status(404).json("Not found");

};

/*
 * Create a projet.
 */
exports.addProjet = function(req, res){
    var projet = req.body;
    projet.id = id++;
    projets.push(projet);
    res.status(200).json();
};

/*
 * Update a projet by is identifier.
 */
exports.updateProjet = function(req, res){
    var projet = req.body;
    var id = projet.id;

    for(var i = 0; i < projets.length; i++){
        if(projets[i].id === id){
            projets.splice(i, 1);
            projets.push(projet);
            res.status(200).json();
        }
    }
    res.status(404).json("Not modified");
};

/*
 * GET projets listing.
 */
exports.deleteProjet = function(req, res){

    var id = req.params.id;

    for(var i = 0; i < projets.length; i++){
        if(projets[i].id == id){
            projets.splice(i, 1);
            res.status(200).json();
        }
    }

    //res.json(304, "Not modified");
    res.status(404).json("Not deleted");
};