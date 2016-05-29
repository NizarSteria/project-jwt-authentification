(function () {
    'use strict';

    angular
        .module('myAdminApp')
        .controller('Login.IndexController', Controller);

    function Controller($state,$scope, $rootScope, AuthenticationService) {
        var vm = this;
        $scope.logged = true;
        vm.login = login;

        initController();

        function initController() {
            // reset login status
            AuthenticationService.Logout();
            $scope.logged = false;
        };

        function login() {
            vm.loading = true;
            AuthenticationService.Login(vm.username, vm.password, function (result) {
                if (result === true) {
                	$scope.logged = false;
                	 //$rootScope.$emit( 'LOGIN_SUCCESS' );
                    $state.go('home');
                } else {
                    vm.error = 'Username or password is incorrect';
                 //   $rootScope.$emit( 'LOGIN_ERROR' );
                    vm.loading = false;
                }
            });
        };
        
//        $rootScope.$on('LOGIN_SUCCESS',
//        	    function() {
//        	      $scope.logged = false;
//        	    });
//
//        	  $rootScope.$on('LOGIN_ERROR',
//        	    function() {
//        	      $scope.logged = true;
//        	    });
    }

})();