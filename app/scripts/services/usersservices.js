"use strict";

myAdminApp.factory("UserService", function ($http) {
    var API_URI = 'http://localhost:8081/outilgestion/api/users';
    

    return {

    	loadUsers : function() {
            return $http.get(API_URI);
        },

        createUser : function(user) {
            return  $http.post(API_URI, user);
        },

        deleteUser  : function(id) {
            return $http.delete(API_URI + '/' + id);
        },

        findById : function(id) {
            return $http.get(API_URI + '/' + id);
        },

        findByUser : function(user) {
            return $http.get(API_URI + '/login/' + user);
        },

        update : function(user) {
             return $http.put(API_URI, user);
        }
        


    };

});
