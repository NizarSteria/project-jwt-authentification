'use strict';

angular.module('myAdminApp')
  .controller('ProjetCtrl', function ($scope,Projet,$routeParams,$location) {

	  Projet.findById($routeParams.id).success(function(resp){
	        $scope.projet = resp;
	    });  
	  
	  $scope.delete=function(){
          var r = confirm("Voulez vous supprimer ce projet ?");
          if (r == true) {
        	  Projet.deleteProjet($scope.projet.id).then(function(){
                  $location.path('/list');
              })
          }
      }
	  
  });
