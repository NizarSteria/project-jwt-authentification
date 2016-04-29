'use strict';

myAdminApp.directive('profilInfo', function (Profil,$state) {
    return {
        templateUrl: 'scripts/directives/profile.html',
        replace: false,
        restrict: 'A',
        scope: {
            profil: '=',
            ondelete:'&'
        },
        link: function postLink(scope, element, attrs) {
            scope.displayAction=false;
            var mouseOverHandler = function () {
                scope.$apply(function () {
                    scope.displayAction=true;
                });
            };

            var mouseOutHandler = function () {
                scope.$apply(function () {
                    scope.displayAction=false;
                });
            };
            element.hover(mouseOverHandler,mouseOutHandler);

            scope.deleteProf= function () {
                var r = confirm("Voulez vous supprimer ce profil ?");
                if (r == true) {
                	Profil.deleteProfil(scope.profil.idProfil).then(function(resp){
                        scope.ondelete({profil:scope.profil});
                        $state.go('profils');
                    })
                }
            }

        }
    };
});
