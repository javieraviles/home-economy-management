'use strict';

angular.module('economyApp.menu', ['economyApp.login.services','economyApp.menu.directives'])


.controller('MenuCtrl', ['$scope','$state', '$rootScope','loginService','$mdSidenav',function($scope, $state, $rootScope, loginService, $mdSidenav) {
    
    $scope.state = $state;
    
    $scope.closeMenu = function (){
        $mdSidenav('left').toggle();
    };
    
    $scope.logout = function (){
        
        loginService.signOut();
        
    }
    
}]);
