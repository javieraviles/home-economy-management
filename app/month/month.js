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

.controller('MonthCtrl', ['$scope', '$stateParams','monthService','$rootScope', '$mdDialog', 'expenseService', function($scope, $stateParams, monthService, $rootScope, $mdDialog, expenseService) {
    
    $scope.currentMonth = "";
    
    monthService.getMonth($stateParams.id)
        .then(function(response){
            $scope.currentMonth = response.data.month;
            $rootScope.headerTitle = $scope.currentMonth.label + ' - savings: '+ $scope.currentMonth.savings+ $rootScope.user.currency;


        },function(error){

            console.log(error);

        });
    

    $scope.showAddExpense = function(ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'month/components/add-expense/add-expense.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: true // Only for -xs, -sm breakpoints.
        })
        .then(function(expense) {
            expense.id=$scope.currentMonth.expenses.length +1;
            expense.icon = 'home';
            expense.color = 'd9534f';
            $scope.currentMonth.expenses.push(expenseService.addExpense($stateParams.id, expense));
            
        }, function() {
            console.log('You cancelled the dialog.');
        });
    };

    function DialogController($scope, $mdDialog, $rootScope) {
        
        $scope.newExpense = {
            label: '',
            amount: '',
            typeId: '1',
            date: ''
        };
        
        $scope.hide = function() {
            $mdDialog.hide();
        };

        $scope.cancel = function() {
            $mdDialog.cancel();
        };

        $scope.addExpense = function(expense) {
            $mdDialog.hide(expense);
        };
        
        $scope.currency = $rootScope.user.currency_icon;
        $scope.expenses = $rootScope.user.expensesTypes;
    };
    
    
    $scope.deleteExpense = function (expense) {
        expenseService.deleteExpense(expense.id);
        $scope.currentMonth.expenses.splice($scope.currentMonth.expenses.indexOf(expense),1);
    };
    
}]);