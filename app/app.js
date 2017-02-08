'use strict';


angular.module('economyApp', [
  'ui.router',
  'ngMaterial',
  'ngMessages',
  'ngStorage',
  'economyApp.menu',
  'economyApp.header',
  'economyApp.login',
  'economyApp.year',
  'economyApp.month'
]).

config(['$stateProvider', '$urlRouterProvider','$locationProvider','$localStorageProvider','$mdThemingProvider', function($stateProvider, $urlRouterProvider, $locationProvider, $localStorageProvider, $mdThemingProvider) {
    
    // Enable browser color
    $mdThemingProvider.enableBrowserColor({
      theme: 'default', // Default is 'default'
      palette: 'primary', // Default is 'primary', any basic material palette and extended palettes are available
      hue: '800' // Default is '800'
    });
    
    $mdThemingProvider.theme('input', 'default')
        .primaryPalette('grey');
    
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
    $rootScope.headerTitle = "EconomyAPP";
}]);