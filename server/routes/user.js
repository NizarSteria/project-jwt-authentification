var users = [
		{
			"id" : 0,
			"login" : "Allyson Hebert",
			"password" : "Fischer",
			"address" : "244 Horace Court, Adelino, District Of Columbia, 597",
			"email" : "allysonfischer@remold.com"
		},
		{
			"id" : 1,
			"login" : "Nettie Hodge",
			"password" : "Klein",
			"address" : "609 Billings Place, Edgewater, Pennsylvania, 6508",
			"email" : "nettieklein@remold.com"
		},
		{
			"id" : 2,
			"login" : "Norris Colon",
			"password" : "Roth",
			"address" : "485 Bridgewater Street, Allamuchy, Maryland, 3431",
			"email" : "norrisroth@remold.com"
		},
		{
			"id" : 3,
			"login" : "Nora Stanton",
			"password" : "Fowler",
			"address" : "168 Central Avenue, Cornucopia, Michigan, 9987",
			"email" : "norafowler@remold.com"
		},
		{
			"id" : 4,
			"login" : "Goodwin Garrett",
			"password" : "Sexton",
			"address" : "376 Jerome Avenue, Norwood, Federated States Of Micronesia, 6227",
			"email" : "goodwinsexton@remold.com"
		} ];

var id = 1;

/*
 * GET users listing.
 */
exports.findAll = function(req, res){
    res.status(200).json(users);
};

/*
 * GET user by identifier.
 */
exports.findById = function(req, res){
    var id = req.params.id;

    for(var i = 0; i < users.length; i++){
        if(users[i].id == id){
            res.status(200).json(users[i]);
        }
    }
    res.status(404).json("Not found");

};

/*
 * Create a user.
 */
exports.addUser = function(req, res){
    var user = req.body;
    user.id = id++;
    users.push(user);
    res.status(200).json();
};

/*
 * Update a user by is identifier.
 */
exports.updateUser = function(req, res){
    var user = req.body;
    var id = user.id;

    for(var i = 0; i < users.length; i++){
        if(users[i].id === id){
            users.splice(i, 1);
            users.push(user);
            res.status(200).json();
        }
    }
    res.status(404).json("Not modified");
};

/*
 * GET users listing.
 */
exports.deleteUser = function(req, res){

    var id = req.params.id;

    for(var i = 0; i < users.length; i++){
        if(users[i].id == id){
            users.splice(i, 1);
            res.status(200).json();
        }
    }

    //res.json(304, "Not modified");
    res.status(404).json("Not deleted");
};