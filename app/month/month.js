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
            $scope.currentMonth = response.data.month;
            $rootScope.headerTitle = $scope.currentMonth.label + ' - savings: '+ $scope.currentMonth.savings+ $rootScope.user.currency;


        },function(error){

            console.log(error);

        });
    
}]);