'use strict';

angular.module('myAdminApp')
  .controller('UserCtrl', function ($scope,User,$routeParams,$location) {

	  User.findById($routeParams.id).success(function(resp){
	        $scope.user = resp;
	    });  
	  
	  $scope.delete=function(){
          var r = confirm("Voulez vous supprimer cet utilisateur ?");
          if (r == true) {
              User.deleteUser($scope.user.id).then(function(){
                  $location.path('/list');
              })
          }
      }
	  
  });
