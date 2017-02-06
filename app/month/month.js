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

.controller('MonthCtrl', ['$scope', '$stateParams','monthService','$rootScope', '$mdDialog', 'expenseService', 'incomeService', function($scope, $stateParams, monthService, $rootScope, $mdDialog, expenseService, incomeService) {
    
    $scope.currentMonth = "";
    
    monthService.getMonth($stateParams.id)
        .then(function(response){
            $scope.currentMonth = response.data.month;
            $rootScope.headerTitle = $scope.currentMonth.label + ' - savings: '+ $scope.currentMonth.savings+ $rootScope.user.currency;


        },function(error){

            console.log(error);

        });
    

    $scope.showAddForm = function(tab, ev) { //tab==0 expenses, tab==1 incomes
        
        var templateUrl = 'month/components/';
        tab == 0 ? templateUrl += 'add-expense/add-expense.html' : templateUrl += 'add-income/add-income.html';
        
        $mdDialog.show({
            controller: DialogController,
            templateUrl: templateUrl,
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: true // Only for -xs, -sm breakpoints.
        })
        .then(function(newItem) {
            
            if(tab==0) {
                newItem.id=$scope.currentMonth.expenses.length +1;
                newItem.icon = 'home';
                newItem.color = 'd9534f';
                $scope.currentMonth.expenses.push(expenseService.addExpense($stateParams.id, newItem));
            }else{
                newItem.id=$scope.currentMonth.incomes.length +1;
                $scope.currentMonth.incomes.push(incomeService.addIncome($stateParams.id, newItem));
            }
            
        }, function() {
            console.log('You cancelled the dialog.');
        });
    };

    function DialogController($scope, $mdDialog, $rootScope) {
        
        $scope.newExpense = {
            label: '',
            amount: '',
            typeId: '1',
            date: new Date()
        };
        
        $scope.currency = $rootScope.user.currency_icon;
        $scope.expenses = $rootScope.user.expensesTypes;
        
        $scope.newIncome = {
            label: '',
            amount: '',
            date: new Date()
        };
        
        $scope.hide = function() {
            $mdDialog.hide();
        };

        $scope.cancel = function() {
            $mdDialog.cancel();
        };

        $scope.addItem = function(newItem) {
            $mdDialog.hide(newItem);
        };
        
    };
    
    
    $scope.deleteExpense = function (expense) {
        expenseService.deleteExpense(expense.id);
        $scope.currentMonth.expenses.splice($scope.currentMonth.expenses.indexOf(expense),1);
    };

    $scope.deleteIncome = function (income) {
        incomeService.deleteIncome(income.id);
        $scope.currentMonth.incomes.splice($scope.currentMonth.incomes.indexOf(income),1);
    };
}]);