'use strict';

angular.module('economyApp.login', ['ui.router','economyApp.services'])

.config(['$stateProvider', function($stateProvider) {
    
  $stateProvider.state('economy.login', {
    url:'/login',
    templateUrl: 'login/login.html',
    controller: 'LoginCtrl',
    hideToolbar: true,
    hideSidenav: true
  });
    
}])

.controller('LoginCtrl', ['$scope','loginService','$state','$rootScope',function($scope, loginService, $state, $rootScope) {
    
    $scope.credentials = {
        email: '',
        password: '',
        username:'',
        remember:false
    };
    
    $scope.logging = false;
    
    $scope.login = function () {
        $scope.logging = true;
        $rootScope.user = loginService.login($scope.credentials)
        console.log($rootScope.user);
        $state.go('economy.dashboard');
    };
    
}]);