
'use strict';

angular.module('myAdminApp')
  .controller('ListRessourceCtrl', function ($scope,Ressource) {

	  Ressource.loadRessources().success(function(resp){
	        $scope.ressources = resp;
	    });  
  });

myAdminApp
.controller('EditRessourceCtrl', function ($scope,Ressource,$routeParams,$location) {

	  $scope.state = "new";
    // Check if we have a ressource
    if ($routeParams.id) {
        $scope.state = "update";
        Ressource.findByIdRes($routeParams.id).then(function (response) {
            $scope.ressource = response.data;
        })
    }
    $scope.getBtnLabel=function(){
        return ($scope.state=="new")?"Ajouter":"Modifier";
    };
	  $scope.submit=function(){
        if($scope.state = "new"){
      	  Ressource.createRessource($scope.ressource);
        }
        else{
      	  Ressource.update($scope.ressource);
        }
        $location.path('/ressources');
    }	 
	  
});

myAdminApp
.controller('RessourceCtrl', function ($scope,Ressource,$routeParams,$location) {

	  Ressource.findByIdRes($routeParams.id).success(function(resp){
	        $scope.ressource = resp;
	    });  
	  
	  $scope.delete=function(){
        var r = confirm("Voulez vous supprimer ce ressource ?");
        if (r == true) {
      	  Ressource.deleteRessource($scope.ressource.id).then(function(){
                $location.path('/ressources');
            })
        }
    }
	  
});
