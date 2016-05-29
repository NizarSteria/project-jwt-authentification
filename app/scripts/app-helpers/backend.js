(function () {
    'use strict';

    angular
        .module('myAdminApp')
        .run(setupFakeBackend);

    // setup fake backend for backend-less development
    function setupFakeBackend($httpBackend) {
        var testUser = { username: 'admin', password: 'admin', firstName: 'admin', lastName: 'admin' };
        var API_URI = 'http://localhost:8081/outilgestion/api/users';
        //  authenticate api end point
        $httpBackend.whenPOST(API_URI).respond(function (method, url, data) {
            // get parameters from post request
            var params = angular.fromJson(data);

            // check user credentials and return fake jwt token if valid
            if (params.username === testUser.username && params.password === testUser.password) {
                return [200, { token: 'fake-jwt-token' }, {}];
            } else {
                return [200, {}, {}];
            }
        });

        // pass through any urls not handled above so static files are served correctly
        $httpBackend.whenGET(/^\w+.*/).passThrough();
        $httpBackend.whenPUT(/^\w+.*/).passThrough();
        $httpBackend.whenPOST(/^\w+.*/).passThrough();
        $httpBackend.whenDELETE(/^\w+.*/).passThrough();
    }
})();