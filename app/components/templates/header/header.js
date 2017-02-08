'use strict';

angular.module('economyApp.header', ['economyApp.header.directives'])


.controller('HeaderCtrl', ['$scope','$state','$mdSidenav','$rootScope',function($scope, $state, $mdSidenav, $rootScope) {
    
    $rootScope.globalSearch = "";
    
    $scope.showSearch=false;
    
    $scope.state = $state;
    
    $scope.openLeftMenu = function() {
        $mdSidenav('left').toggle();
    };
    
    
}]);