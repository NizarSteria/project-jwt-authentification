'use strict';

angular.module('myAdminApp')
  .controller('EditCtrl', function ($scope,Projet,$stateParams,$state) {

	  var state = "new";
      //Check if we have a projet
      if ($stateParams.id) {
          state = "update";
          Projet.findById($stateParams.id).then(function (response) {
              $scope.projet = response.data;
          })
      }
      $scope.getBtnLabel=function(){
          return (state=="new")?"Ajouter":"Modifier";
      };
	  $scope.submit=function(){
          if(state === 'new'){
        	  Projet.createProjet($scope.projet);
          }
          else{
        	  Projet.updateProjet($scope.projet);
          }
         // Projet.loadProjets();
          $state.go('list');
         // $location.path('/list');
      }	 
	  
  });
