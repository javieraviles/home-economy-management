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
            $rootScope.headerTitle = $scope.currentMonth.label + ' | '+ $scope.currentMonth.savings+ $rootScope.user.currency;


        },function(error){

            console.log(error);

        });
    

    $scope.showTransactionForm = function(tab, ev, transaction) { //tab==0 expenses, tab==1 incomes, if edit transaction, if add transaction = false
        
        var templateUrl = 'month/components/';
        tab == 0 ? templateUrl += 'expense-form/expense-form.html' : templateUrl += 'income-form/income-form.html';
        
        $mdDialog.show({
            controller: DialogController,
            locals: {
                transaction: transaction
            },
            templateUrl: templateUrl,
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: true // Only for -xs, -sm breakpoints.
        })
        .then(function(newItem) {
            
            if(tab==0) {
                if(transaction)
                    $scope.currentMonth.expenses[$scope.currentMonth.expenses.indexOf(transaction)]=expenseService.updateExpense($stateParams.id, newItem);
                else{
                    newItem.id=$scope.currentMonth.expenses.length +1;
                    newItem.icon = 'home';
                    newItem.color = 'd9534f';
                    $scope.currentMonth.expenses.push(expenseService.addExpense($stateParams.id, newItem));
                }
            }else{
                newItem.id=$scope.currentMonth.incomes.length +1;
                $scope.currentMonth.incomes.push(incomeService.addIncome($stateParams.id, newItem));
            }
            
        }, function() {
            console.log('You cancelled the dialog.');
        });
    };

    function DialogController($scope, $mdDialog, $rootScope, transaction) {
        
        if(transaction){
            
            transaction.date=new Date(transaction.date);
            
            $scope.newExpense = transaction;
            $scope.newIncome = transaction;
            
            $scope.edit=true;
            
        }
        else{
            
            $scope.newExpense = {
                label: '',
                amount: '',
                typeId: '1',
                date: new Date()
            };
            
            $scope.newIncome = {
                label: '',
                amount: '',
                date: new Date()
            };
            
            $scope.edit=false;
        }
        
        $scope.currency = $rootScope.user.currency_icon;
        $scope.expenses = $rootScope.user.expensesTypes;
        
        
        
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