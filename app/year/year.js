'use strict';

angular.module('economyApp.year', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('economy.year', {
    url: '/year:id',
    templateUrl: 'year/year.html',
    controller: 'YearCtrl',
    hideToolbar: false,
    hideSidenav: false
  });
}])

.controller('YearCtrl', [function() {
   
}]);