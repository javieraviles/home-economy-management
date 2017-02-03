'use strict';

angular.module('economyApp.header', ['ngMaterial','economyApp.login.services'])


.controller('HeaderCtrl', ['$scope','$state','$mdSidenav','$rootScope','loginService',function($scope, $state, $mdSidenav, $rootScope, loginService) {
    
    $scope.state = $state;
    
    $scope.openLeftMenu = function() {
        $mdSidenav('left').toggle();
    };
    
    $scope.logout = function (){
        
        loginService.signOut();
        
    }
}]);