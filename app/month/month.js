'use strict';

angular.module('economyApp.month', ['ui.router','economyApp.month.services'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('economy.month', {
    url: '/month:id',
    templateUrl: 'month/month.html',
    controller: 'MonthCtrl',
    hideToolbar: false,
    hideSidenav: false
  });
}])

.controller('MonthCtrl', ['$scope', '$stateParams','monthService','$rootScope',function($scope, $stateParams, monthService, $rootScope) {
    
    $scope.currentMonth = "";
    
    monthService.getMonth($stateParams.id)
        .then(function(response){
            console.log(response);
            $scope.currentMonth = response.data.month;

        },function(error){

            console.log(error);

        });
    
}]);