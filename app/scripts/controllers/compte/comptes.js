'use strict';

angular.module('myAdminApp').controller('EditCompteCtrl',
		function($scope, Profil, $stateParams, $state) {

			$scope.checkiban = "IBAN";
			$scope.radioiban = true;
			$scope.RadioIban = function() {
				$scope.radioiban = true;
			};
			
			$scope.RadioAutre = function(){
				$scope.radioiban = false;
			};

		});
