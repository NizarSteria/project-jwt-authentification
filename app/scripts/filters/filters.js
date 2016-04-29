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

angular.module('myAdminApp').filter('formatDate', function() {
	return function( date ) {
		return new Date( date ).toString( dateFormat );
	};
});
