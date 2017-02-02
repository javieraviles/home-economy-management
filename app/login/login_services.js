'use strict';

angular.module('economyApp.login.services', [])

.factory('loginService', ['$http', function($http) {
    
    var endpoint = "api/login/";
    
    return {
        signIn: _signIn
    }
    
    function _signIn (credentials) {

        //return $http.post(endpoint + 'signin', credentials);
        return $http.get('/login/signin_mock.json');

    }
    
}]);