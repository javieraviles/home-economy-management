'use strict';


angular.module('economyApp', [
  'ui.router',
  'ngMaterial',
  'ngMdIcons',
  'ngMessages',
  'economyApp.menu',
  'economyApp.header',
  'economyApp.login',
  'economyApp.year',
  'economyApp.month'
]).

config(['$stateProvider', '$urlRouterProvider','$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    
    $locationProvider.hashPrefix('!');
    
    $stateProvider
    .state('economy', {
        abstract: true,
        url: '/economy',
        views: {
            header: {
                templateUrl: 'components/templates/header/header.html',
                controller: 'HeaderCtrl'
            },
            menu: {
                templateUrl: 'components/templates/menu/menu.html',
                controller: 'MenuCtrl'
            },
            content: {
                templateUrl: 'components/templates/content/content.html'
            }
        }
    });
    
    $urlRouterProvider.otherwise('/economy/login');
    
}]);