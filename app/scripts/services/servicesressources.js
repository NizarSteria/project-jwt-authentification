"use strict";

myAdminApp.factory("Ressource", function ($http) {
    var API_URI = 'http://localhost:8081/outilgestion/api/ressources';
     var API_URI_PROFIL = 'http://localhost:8081/outilgestion/api/profils';
     var cache;
    return {

    	loadRessources : function() {
    		if(cache == null){
    			cache = $http.get(API_URI);
    		}
            return cache;
        },
        
        loadProfils : function() {
            return $http.get(API_URI_PROFIL);
        },
        
        loadRessourcesById : function(id) {
            return $http.get(API_URI_PROFIL+'/'+id+'/ressources');
        },

        createRessource : function(ressource) {
            return  $http.post(API_URI, ressource);
        },

        deleteRessource  : function(id) {
            return $http.delete(API_URI + '/' + id);
        },

        findByIdRes : function(id) {
            return $http.get(API_URI + '/' + id);
        },

        update : function(ressource) {
             return $http.put(API_URI, ressource);
        }

    };

});
