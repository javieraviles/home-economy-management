'use strict';

angular.module('economyApp.year', ['ui.router','economyApp.year.services'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('economy.year', {
    url: '/year:id',
    templateUrl: 'year/year.html',
    controller: 'YearCtrl',
    hideToolbar: false,
    hideSidenav: false
  });
}])

.controller('YearCtrl', ['$scope', '$stateParams','yearService','$rootScope',function($scope, $stateParams, yearService, $rootScope) {
    
    $scope.currentYear = "";
    
    yearService.getYear($stateParams.id)
        .then(function(response){

            $scope.currentYear = response.data.year;
            $rootScope.headerTitle = $scope.currentYear.label + ' | '+ $scope.currentYear.savings+ $rootScope.user.currency;

        },function(error){

            console.log(error);

        });
    
}]);