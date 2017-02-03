'use strict';

angular.module('economyApp.login.services', [])

.factory('loginService', ['$http','$rootScope', '$localStorage', '$state', function($http, $rootScope, $localStorage, $state) {
    
    var endpoint = "api/login/";
    
    return {
        signIn: _signIn,
        signOut: _signOut
    }
    
    function _signIn (credentials) {

        //return $http.post(endpoint + 'signin', credentials);
        return $http.get('/login/signin_mock.json');

    }
    
    function _signOut () {

        delete $rootScope.user;
        $localStorage.$reset();
        $state.go('economy.login');

    }
    
}]);