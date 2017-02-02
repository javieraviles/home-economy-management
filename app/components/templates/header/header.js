'use strict';

angular.module('economyApp.header', ['ngMaterial'])


.controller('HeaderCtrl', ['$scope','$state','$mdSidenav','$rootScope',function($scope, $state, $mdSidenav, $rootScope) {
    
    $scope.state = $state;
    
    $scope.openLeftMenu = function() {
        $mdSidenav('left').toggle();
    };
    
    $scope.logout = function (){
        
        delete $rootScope.user;
        $state.go('economy.login');
        
    }
}]);