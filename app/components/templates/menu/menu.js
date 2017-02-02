'use strict';

angular.module('economyApp.menu', [])


.controller('MenuCtrl', ['$scope','$state', '$rootScope',function($scope, $state, $rootScope) {
    
    $scope.state = $state;
    $rootScope.user ? $scope.menu = $rootScope.user.menu : $scope.menu = "";
    
    $scope.$on('user-logged-in-successfully', function() {

        $scope.menu = $rootScope.user.menu;
        
    });
    
    
}]);