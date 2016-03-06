var ressources = [
		{
			"id" : 0,
			"prestataire" : "code1",
			"idTjmSocieteProfil" : "1"
			
		},
		{
			"id" : 1,
			"prestataire" : "code2",
			"idTjmSocieteProfil" : "4"
		},
		{
			"id" : 2,
			"prestataire" : "code3",
			"idTjmSocieteProfil" : "5"
		},
		{
			"id" : 3,
			"prestataire" : "code4",
			"idTjmSocieteProfil" : "3"
		},
		{
			"id" : 4,
			"prestataire" : "code5",
			"idTjmSocieteProfil" : "2",
		} ];

var id = 1;

/*
 * GET ressources listing.
 */
exports.findAllRessouce = function(req, res){
    res.status(200).json(ressources);
};

/*
 * GET ressource by identifier.
 */
exports.findByIdRes = function(req, res){
    var id = req.params.id;

    for(var i = 0; i < ressources.length; i++){
        if(ressources[i].id == id){
            res.status(200).json(ressources[i]);
        }
    }
    res.status(404).json("Not found");

};

/*
 * Create a ressource.
 */
exports.addRessource = function(req, res){
    var ressource = req.body;
    ressource.id = id++;
    ressources.push(ressource);
    res.status(200).json();
};

/*
 * Update a ressource by is identifier.
 */
exports.updateRessource = function(req, res){
    var ressource = req.body;
    var id = ressource.id;

    for(var i = 0; i < ressources.length; i++){
        if(ressources[i].id === id){
        	ressources.splice(i, 1);
        	ressources.push(ressource);
            res.status(200).json();
        }
    }
    res.status(404).json("Not modified");
};

/*
 * GET ressources listing.
 */
exports.deleteRessource = function(req, res){

    var id = req.params.id;

    for(var i = 0; i < ressources.length; i++){
        if(ressources[i].id == id){
        	ressources.splice(i, 1);
            res.status(200).json();
        }
    }

    //res.json(304, "Not modified");
    res.status(404).json("Not deleted");
};