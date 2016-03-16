
'use strict';

angular.module('myAdminApp')
  .controller('ListUsersCtrl', function ($scope,UserService) {

	  UserService.loadUsers().success(function(resp){
	        $scope.users = resp;
	    });  
  });

