'use strict';

angular.module('myAdminApp')
  .controller('EditCtrl', function ($scope,User,$routeParams,$location) {

	  $scope.state = "new";
      //Check if we have a user
      if ($routeParams.id) {
          $scope.state = "update";
          User.findById($routeParams.id).then(function (response) {
              $scope.user = response.data;
          })
      }
      $scope.getBtnLabel=function(){
          return ($scope.state=="new")?"Ajouter":"Modifier";
      };
	  $scope.submit=function(){
          if($scope.state = "new"){
        	  User.createUser($scope.user);
          }
          else{
        	  User.update($scope.user);
          }
          $location.path('/list');
      }	 
	  
  });
