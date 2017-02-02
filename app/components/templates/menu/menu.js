'use strict';

angular.module('economyApp.menu', [])


.controller('MenuCtrl', ['$scope','$state', '$rootScope',function($scope, $state, $rootScope) {
    
    $scope.state = $state;
    
    $scope.menu = 
          [   
                {
                  year: '2016', 
                  id: '1',
                  months: 
                    [
                        {month: 'January',id: '1'},
                        {month: 'February',id: '2'},
                        {month: 'March',id: '3'}
                    ]
                },
                {
                  year: '2017', 
                  id: '2',
                  months: 
                    [
                        {month: 'January',id: '1'},
                        {month: 'February',id: '2'}
                    ]
              },
          ]
}]);