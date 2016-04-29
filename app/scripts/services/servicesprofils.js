"use strict";

myAdminApp.factory("Profil", function ($http) {
     var API_URI = 'http://localhost:8081/outilgestion/api/profils';
     var cache;
    return {

    	loadProfils : function() {
    		if(cache == null){
    			cache = $http.get(API_URI);
    		}
            return cache;
        },
         
        createProfil : function(profil) {
            return  $http.post(API_URI, profil);
        },

        deleteProfil  : function(id) {
            return $http.delete(API_URI + '/' + id);
        },

        findByIdProfil : function(id) {
            return $http.get(API_URI + '/' + id);
        },

        update : function(ressource) {
             return $http.put(API_URI, ressource);
        }

    };

});
