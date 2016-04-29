'use strict';


angular.module('myAdminApp').controller('ListSocieteCtrl',
		function($scope, Societe, $stateParams) {

	Societe.loadSocietes().success(function(resp) {
				$scope.societes = resp;
			});
		});

myAdminApp.controller('EditSocieteCtrl', function($scope, Societe,
		$stateParams,$state) {

	$scope.state = "new";
	
	
	 // Check if we have a Societe
	if ($stateParams.id) {
		$scope.state = "update";
		Societe.findByIdSociete($stateParams.id).then(function(response) {
			$scope.societe = response.data;
		})
	}
	$scope.getBtnLabel = function() {
		return ($scope.state == "new") ? "Ajouter" : "Modifier";
	};
	$scope.submit = function() {
		if ($scope.state === "new") {
			Societe.createSociete($scope.societe);
		} else {
			Societe.update($scope.societe);
		}
		$state.go('societes');
	}

	Societe.loadSocietes().success(function(resp) {
		$scope.societes = resp;
	});
	
});

 myAdminApp.controller('SocieteCtrl', function ($scope, Societe,
			$stateParams,$state) {
		
	 Societe.findByIdSociete($stateParams.id).success(function(resp){
			 $scope.societe = resp;
		 });
			  
		 $scope.delete=function(){
			 var r = confirm("Voulez vous supprimer cette societe ?");
			 if (r == true) {
				 Societe.deleteSociete($scope.societe.idSociete).then(function(){
				 		$state.go('societes');
				 	})
			 }
		 }
 });
