'use strict';

angular.module('economyApp.dashboard', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('economy.dashboard', {
    url: '/dashboard',
    templateUrl: 'dashboard/dashboard.html',
    controller: 'DashboardCtrl',
    hideToolbar: false,
    hideSidenav: false
  });
}])

.controller('DashboardCtrl', [function() {
   
}]);