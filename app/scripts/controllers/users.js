
'use strict';

angular.module('myAdminApp')
  .controller('ListUserCtrl', function ($scope,Ressource) {

	  User.loadUsers().success(function(resp){
	        $scope.users = resp;
	    });  
  });

angular.module('myAdminApp')
.controller('EditUserCtrl', function ($scope,User,$routeParams,$location) {

	  $scope.state = "new";
    //Check if we have a ressource
    if ($routeParams.id) {
        $scope.state = "update";
        User.findByIdRes($routeParams.id).then(function (response) {
            $scope.user = response.data;
        })
    }
    $scope.getBtnLabel=function(){
        return ($scope.state=="new")?"Ajouter":"Modifier";
    };
	  $scope.submit=function(){
        if($scope.state = "new"){
        	User.createUser($scope.user);
        }
        else{
        	User.update($scope.user);
        }
        $location.path('/users');
    }	 
	  
});

angular.module('myAdminApp')
.controller('UserCtrl', function ($scope,User,$routeParams,$location) {

	User.findByIdRes($routeParams.id).success(function(resp){
	        $scope.user = resp;
	    });  
	  
	  $scope.delete=function(){
        var r = confirm("Voulez vous supprimer cet utilisateur ?");
        if (r == true) {
        	User.deleteUser($scope.user.id).then(function(){
                $location.path('/users');
            })
        }
    }
	  
});






