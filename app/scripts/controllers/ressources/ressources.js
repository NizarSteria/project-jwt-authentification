'use strict';


angular.module('myAdminApp').controller('ListRessourceCtrl',
		function($scope, Ressource, $stateParams) {

			// Ressource.loadRessourcesById($stateParams.id).success(function(resp){
			Ressource.loadRessources().success(function(resp) {
				$scope.ressources = resp;
			});
		});

myAdminApp.controller('EditRessourceCtrl', function($scope, Ressource,
		$stateParams,$state) {

	$scope.state = "new";
	
	
	 // Check if we have a ressource
	if ($stateParams.id) {
		$scope.state = "update";
		Ressource.findByIdRes($stateParams.id).then(function(response) {
			$scope.ressource = response.data;
		})
	}
	$scope.getBtnLabel = function() {
		return ($scope.state == "new") ? "Ajouter" : "Modifier";
	};
	$scope.submit = function() {
		if ($scope.state === "new") {
			Ressource.createRessource($scope.ressource);
		} else {
			Ressource.update($scope.ressource);
		}
		$state.go('ressources');
	}

	Ressource.loadProfils().success(function(resp) {
		$scope.profils = resp;
	});
	
});

 myAdminApp.controller('RessourceCtrl', function ($scope, Ressource,
			$stateParams,$state) {
		
		 Ressource.findByIdRes($stateParams.id).success(function(resp){
			 $scope.ressource = resp;
		 });
			  
		 $scope.delete=function(){
			 var r = confirm("Voulez vous supprimer ce ressource ?");
			 if (r == true) {
				 	Ressource.deleteRessource($scope.ressource.idRessource).then(function(){
				 		$state.go('ressources');
				 	})
			 }
		 }
	  
 });
