'use strict';


angular.module('economyApp', [
  'ui.router',
  'ngMaterial',
  'ngMdIcons',
  'ngMessages',
  'ngStorage',
  'economyApp.menu',
  'economyApp.header',
  'economyApp.login',
  'economyApp.year',
  'economyApp.month'
]).

config(['$stateProvider', '$urlRouterProvider','$locationProvider','$localStorageProvider', function($stateProvider, $urlRouterProvider, $locationProvider, $localStorageProvider) {
    
    $locationProvider.hashPrefix('!');
    
    //$localStorageProvider.get('user');
    
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
    
}]).

run(['$rootScope','$localStorage',function($rootScope,$localStorage){
    $rootScope.user = $localStorage.user;
}]);