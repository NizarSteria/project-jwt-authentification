'use strict';

angular.module('myAdminApp')
  .filter('picture', function () {
        return function(posterUrl) {
            if(!posterUrl){
                return "images/Icon-user.png";
            } else {
                return posterUrl;
            }
        };
  });
