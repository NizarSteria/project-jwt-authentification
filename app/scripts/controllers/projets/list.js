'use strict';

angular.module('myAdminApp')
  .controller('ListCtrl', function ($scope,Projet) {

	  Projet.loadProjets().success(function(resp){
	        $scope.projets = resp;
	    });  
  });
