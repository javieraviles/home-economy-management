'use strict';

angular.module('economyApp.menu', [])


.controller('MenuCtrl', ['$scope', '$rootScope','$state',function($scope, $rootScope, $state) {
    
    $scope.state = $state;
    
}]);