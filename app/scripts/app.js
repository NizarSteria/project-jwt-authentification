'use strict';
// var myAdminApp = angular.module('myAdminApp', [ 'ngRoute','ui.bootstrap' ]);
// 'angularMovieUI','angularMovieCore', 'app.interceptors'
var myAdminApp = angular.module('myAdminApp', [ 'ui.router', 'ui.bootstrap', 'ngCookies', 'ngMessages', 'ngStorage', 'ngMockE2E', 'mm.iban']);

myAdminApp
		.config(
				function($stateProvider, $urlRouterProvider, datepickerConfig,
						datepickerPopupConfig, $httpProvider) {
					$stateProvider.state('home', {
						url : '/home',
						templateUrl : 'views/main.html',
						controller : 'MainCtrl'
					}).state('list', {
						url : '/list',
						templateUrl : 'views/projets/list.html',
						controller : 'ListCtrl'
					})
					/*.state('login', {
						url : '/login',
						templateUrl : 'views/login/login.html',
						controller : 'LoginController',
						controllerAs: 'vm'			                
					})*/
					.state('logout', {
						url : '/logout',
						templateUrl : 'views/login/logout.html',
						controller : 'Home.IndexController',
						controllerAs: 'vm'			                
					})
					.state('login', {
						url : '/login',
						templateUrl : 'views/login/login.html',
						controller : 'Login.IndexController',
						controllerAs: 'vm'			                
					})
					.state('register', {
						url : '/register',
						templateUrl : 'views/register/register.html',
						controller : 'RegisterController',
						controllerAs: 'vm'
					}).state('projet', {
						url : '/projet/:id',
						templateUrl : 'views/projets/projet.html',
						controller : 'ProjetCtrl'
					}).state('editprojet', {
						url : '/edit/:id?',
						templateUrl : 'views/projets/edit.html',
						controller : 'EditCtrl'
					}).state('help', {
						url : '/help',
						templateUrl : 'views/consignes.html'
					}).state('ressources', {
						url : '/ressources',
						templateUrl : 'views/ressources/ressources.html',
						controller : 'ListRessourceCtrl'
					}).state('editRessource', {
						url : '/editRessource/:id?',
						templateUrl : 'views/ressources/editRessource.html',
						controller : 'EditRessourceCtrl'
					}).state('ressource', {
						url : '/ressource/:id',
						templateUrl : 'views/ressources/ressource.html',
						controller : 'RessourceCtrl'
					}).state('profils', {
						url : '/profils',
						templateUrl : 'views/profils/profils.html',
						controller : 'ListProfilCtrl'
					}).state('editProfil', {
						url : '/editProfil/:id?',
						templateUrl : 'views/profils/editProfil.html',
						controller : 'EditProfilCtrl'
					}).state('profil', {
						url : '/profil/:id',
						templateUrl : 'views/profils/profil.html',
						controller : 'ProfilCtrl'
					}).state('societes', {
						url : '/societes',
						templateUrl : 'views/societes/societes.html',
						controller : 'ListSocieteCtrl'
					}).state('editSociete', {
						url : '/editSociete/:id?',
						templateUrl : 'views/societes/editSociete.html',
						controller : 'EditSocieteCtrl'
					}).state('societe', {
						url : '/societe/:id',
						templateUrl : 'views/societes/societe.html',
						controller : 'SocieteCtrl'
					}).state('suivi', {
						url : '/suivi',
						templateUrl : 'views/suivi/SuiviPresta.html',
						controller : 'ListSuiviPrestaCtrl'
					})
					.state('comte', {
						url : '/compte',
						templateUrl : 'views/compte/editCompte.html',
						controller : 'EditCompteCtrl'
					});
//					.state('resultsuivi', {
//						url : '/resultsuivi',
//						templateUrl : 'views/suivi/resultsuivi.html',
//						controller : 'ResultSuiviPresta'
//					});
					
					$urlRouterProvider.otherwise('/login');

					$httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
					
					// AuthProvider.setURI('/server/auth');
					// DATEPICKER
					datepickerConfig.showWeeks = false;
					datepickerPopupConfig.showButtonBar = false;
				}).run(function($rootScope, $location, $localStorage, $cookieStore, $http) {
			// GLOBAL
			$rootScope.dateFormat = dateFormat;
			$rootScope.CODE_REGEXP = CODE_REGEXP;
			$rootScope.EMAIL_REGEXP = EMAIL_REGEXP;

			  // keep user logged in after page refresh
	        if ($localStorage.currentUser) {
	            $http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;
	        }

	        // redirect to login page if not logged in and trying to access a restricted page
	        $rootScope.$on('$locationChangeStart', function (event, next, current) {
	        	 var publicPages = ['/login'];
	             var restrictedPage = publicPages.indexOf($location.path()) === -1;
	             if (restrictedPage && !$localStorage.currentUser) {
	                 $location.path('/login');
	             }
	        })
		});
			/*$rootScope.globals = $cookieStore.get('globals') || {};
	        if ($rootScope.globals.currentUser) {
	            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
	        }*/	        

			
	 
