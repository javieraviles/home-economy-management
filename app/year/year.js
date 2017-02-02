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

.controller('YearCtrl', ['$scope', '$stateParams','yearService',function($scope, $stateParams, yearService) {
    
    $scope.currentYear = "";
    
    yearService.getYear($stateParams.id)
        .then(function(response){

            $scope.currentYear = response.data.year;

        },function(error){

            console.log(error);

        });
    
}]);