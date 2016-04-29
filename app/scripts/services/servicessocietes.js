"use strict";

myAdminApp.factory("Societe", function ($http) {
     var API_URI = 'http://localhost:8081/outilgestion/api/societes';

    return {

    	loadSocietes : function() {
            return $http.get(API_URI);
        },
         
        createSociete : function(societe) {
            return  $http.post(API_URI, societe);
        },

        deleteSociete  : function(id) {
            return $http.delete(API_URI + '/' + id);
        },

        findByIdSociete : function(id) {
            return $http.get(API_URI + '/' + id);
        },

        update : function(ressource) {
             return $http.put(API_URI, ressource);
        }

    };

});
