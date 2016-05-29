'use strict';

angular.module('myAdminApp').controller('ListSuiviPrestaCtrl',
		function($scope, Projet, Ressource, Societe, Profil) {

			Projet.loadProjets().success(function(resp) {
				$scope.projets = resp;
			});

			Ressource.loadRessources().success(function(resp) {
				$scope.ressources = resp;
			});

			Societe.loadSocietes().success(function(resp) {
				$scope.societes = resp;
			});
			
			Profil.loadProfils().success(function(resp) {
				$scope.profils = resp;
			});
		});
