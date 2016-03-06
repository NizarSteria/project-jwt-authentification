'use strict';

angular.module('myAdminApp')
  .controller('EditCtrl', function ($scope,Projet,$routeParams,$location) {

	  $scope.state = "new";
      //Check if we have a projet
      if ($routeParams.id) {
          $scope.state = "update";
          Projet.findById($routeParams.id).then(function (response) {
              $scope.projet = response.data;
          })
      }
      $scope.getBtnLabel=function(){
          return ($scope.state=="new")?"Ajouter":"Modifier";
      };
	  $scope.submit=function(){
          if($scope.state = "new"){
        	  Projet.createProjet($scope.projet);
          }
          else{
        	  Projet.update($scope.projet);
          }
          $location.path('/list');
      }	 
	  
  });
