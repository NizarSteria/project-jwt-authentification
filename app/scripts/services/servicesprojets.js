"use strict";

myAdminApp.factory("Projet", function ($http) {
        var API_URI = 'http://localhost:8081/outilgestion/api/projets';
	// var API_URI ="/projets";
    return {

    	loadProjets : function() {
            return $http.get(API_URI);
        },

        createProjet : function(projet) {
            return  $http.post(API_URI, projet);
        },

        deleteProjet  : function(id) {
            return $http.delete(API_URI + '/' + id);
        },

        findById : function(id) {
            return $http.get(API_URI + '/' + id);
        },

        updateProjet : function(projet) {
             return $http.put(API_URI, projet);
        }

    };

});
