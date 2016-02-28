"use strict";

myAdminApp.factory("User", function ($http) {
    var API_URI = '/api/users';

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

        update : function(movie) {
             return $http.put(API_URI, user);
        }

    };

});
