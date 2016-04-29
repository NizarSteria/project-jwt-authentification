'use strict';


angular.module('myAdminApp').controller('ListProfilCtrl',
		function($scope, Profil, $stateParams) {

	Profil.loadProfils().success(function(resp) {
				$scope.profils = resp;
			});
		});

myAdminApp.controller('EditProfilCtrl', function($scope, Profil,
		$stateParams,$state) {

	$scope.state = "new";
	
	
	 // Check if we have a Profil
	if ($stateParams.id) {
		$scope.state = "update";
		Profil.findByIdProfil($stateParams.id).then(function(response) {
			$scope.profil = response.data;
		})
	}
	$scope.getBtnLabel = function() {
		return ($scope.state == "new") ? "Ajouter" : "Modifier";
	};
	$scope.submit = function() {
		if ($scope.state === "new") {
			Profil.createProfil($scope.profil);
		} else {
			Profil.update($scope.profil);
		}
		$state.go('profils');
	}

	Profil.loadProfils().success(function(resp) {
		$scope.profils = resp;
	});
	
});

 myAdminApp.controller('ProfilCtrl', function ($scope, Profil,
			$stateParams,$state) {
		
	 Profil.findByIdProfil($stateParams.id).success(function(resp){
			 $scope.profil = resp;
		 });
			  
		 $scope.delete=function(){
			 var r = confirm("Voulez vous supprimer ce profil ?");
			 if (r == true) {
				 Profil.deleteProfil($scope.profil.idProfil).then(function(){
				 		$state.go('profils');
				 	})
			 }
		 }
 });
