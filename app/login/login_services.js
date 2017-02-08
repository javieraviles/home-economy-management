'use strict';

angular.module('economyApp.login.services', [])

.factory('loginService', ['$http','$rootScope', '$localStorage', '$state', function($http, $rootScope, $localStorage, $state) {
    
    var endpoint = "api/users/";
    
    return {
        signIn: _signIn,
        signOut: _signOut
    }
    
    function _signIn (credentials) {

        //return $http.get(endpoint + 'signin', credentials);
        return $http.get('./login/signin_mock.json');

    }
    
    function _signOut () {
        //return $http.get(endpoint + 'signout');
        delete $rootScope.user;
        $localStorage.$reset();
        $state.go('economy.login');

    }
    
}]);