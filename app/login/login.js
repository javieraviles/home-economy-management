'use strict';

angular.module('economyApp.login', ['ui.router','economyApp.login.services','economyApp.login.directives'])

.config(['$stateProvider', function($stateProvider) {
    
  $stateProvider.state('economy.login', {
    url:'/login',
    templateUrl: 'login/login.html',
    controller: 'LoginCtrl',
    hideToolbar: true,
    hideSidenav: true
  });
    
}])

.controller('LoginCtrl', ['$scope','loginService','$state','$rootScope','$localStorage',function($scope, loginService, $state, $rootScope, $localStorage) {
    
    $scope.credentials = {
        email: '',
        password: '',
        remember:true
    };
    
    $scope.loginNotifications = [];
    $scope.loginNotifications.loader = false;
    $scope.loginNotifications.error = false;
    
    $scope.login = function () {
        
        $scope.loginNotifications.loader = true;
        $scope.loginNotifications.error = false;
        
        loginService.signIn($scope.credentials)
        
            .then(function(response){
            
                switch(response.status){
                        
                    case 200:
                    case 304:
                        $rootScope.user = response.data.user;
                        $localStorage.user = response.data.user;
                        //$rootScope.$broadcast('user-logged-in-successfully');
                        $state.go('economy.year', { "id": $rootScope.user.lastYearId});
                        break;
                        
                    default:
                        //$scope.loginNotifications.error = "wrong-email";
                        $scope.loginNotifications.error = "wrong-password";
                }
            
                $scope.loginNotifications.loader = false;
            
            },function(error){
            
                $scope.loginNotifications.error = "general-error";
                $scope.loginNotifications.loader = false;
            
            });
        
    };
    
}]);