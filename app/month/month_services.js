'use strict';

angular.module('economyApp.month.services', [])

.factory('monthService', ['$http', function($http) {
    
    var endpoint = "api/months/";
    
    return {
        getMonth: _getMonth
    }
    
    function _getMonth (monthId) {

        //return $http.get(endpoint + monthId);
        return $http.get('./month/getMonth_mock.json');

    }
    
}])

.factory('expenseService', ['$http', function($http) {
    
    var endpoint = "api/months/";
    
    return {
        addExpense: _addExpense,
        deleteExpense: _deleteExpense,
        updateExpense: _updateExpense
    }
    
    function _addExpense (monthId, expense) {

        //return $http.post(endpoint + monthId + 'expenses', expense);
        return expense;

    }
    
    function _updateExpense (monthId, expense) {

        //return $http.put(endpoint + monthId + 'expenses', expense);
        return expense;

    }
    
    function _deleteExpense (monthId, expenseId) {

        //return $http.delete(endpoint + monthId + 'expenses' + expenseId);

    }
    
}])

.factory('incomeService', ['$http', function($http) {
    
    var endpoint = "api/months/";
    
    return {
        addIncome: _addIncome,
        deleteIncome: _deleteIncome
    }
    
    function _addIncome (monthId, income) {

        //return $http.post(endpoint + monthId + 'incomes', income);
        return income;

    }
    
    function _deleteIncome (monthId, incomeId) {

        //return $http.delete(endpoint + monthId + 'incomes' + incomeId);

    }
    
}]);