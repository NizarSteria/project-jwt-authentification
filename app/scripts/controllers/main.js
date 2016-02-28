'use strict';

angular.module('myAdminApp')
  .controller('MainCtrl', function ($scope,$location) {
    $scope.isCurrent=function(path){
        return $location.path()==path;
    }
  });
