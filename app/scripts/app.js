'use strict';
var myAdminApp = angular.module('myAdminApp', [ 'ngRoute' ]);

myAdminApp.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'views/main.html',
		controller : 'MainCtrl'
	}).when('/list', {
		templateUrl : 'views/list.html',
		controller : 'ListCtrl'
	}).when('/user/:id', {
		templateUrl : 'views/user.html',
		controller : 'UserCtrl'
	}).when('/edit/:id?', {
		templateUrl : 'views/edit.html',
		controller : 'EditCtrl'
	}).when('/help', {
		templateUrl : 'views/consignes.html'
	}).otherwise({
		redirectTo : '/'
	});
});
