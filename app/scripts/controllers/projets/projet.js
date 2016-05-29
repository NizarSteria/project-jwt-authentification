'use strict';

angular.module('myAdminApp')
  .controller('ProjetCtrl', function ($scope,Projet,$stateParams,$state) {

	  Projet.findById($stateParams.id).success(function(resp){
	        $scope.projet = resp;
	    });  
	  
	  $scope.delete=function(){
          var r = confirm("Voulez vous supprimer ce projet ?");
          if (r == true) {
        	  Projet.deleteProjet($scope.projet.idProjet).then(function(){
                  //$location.path('/list');
                  $state.go('list');
              })
          }
      }
	  
  });
