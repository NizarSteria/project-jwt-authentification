'use strict';

angular.module('myAdminApp')
  .controller('ListCtrl', function ($scope,User) {

	  User.loadUsers().success(function(resp){
	        $scope.users = resp;
	    });  
  });
