'use strict';
var myAdminApp = angular.module('myAdminApp', [ 'ngRoute' ]);

myAdminApp.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'views/main.html',
		controller : 'MainCtrl'
	}).when('/list', {
		templateUrl : 'views/list.html',
		controller : 'ListCtrl'
	}).when('/projet/:id', {
		templateUrl : 'views/projet.html',
		controller : 'ProjetCtrl'
	}).when('/edit/:id?', {
		templateUrl : 'views/edit.html',
		controller : 'EditCtrl'
	}).when('/ressources', {
		templateUrl : 'views/ressources.html',
		controller : 'ListRessourceCtrl'
	}).when('/ressource/:id', {
		templateUrl : 'views/ressource.html',
		controller : 'RessourceCtrl'
	}).when('/editRessource/:id?', {
		templateUrl : 'views/editRessource.html',
		controller : 'EditRessourceCtrl'
	
	}).when('/help', {
		templateUrl : 'views/consignes.html'
	}).otherwise({
		redirectTo : '/'
	});
});
