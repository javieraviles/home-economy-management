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
        deleteExpense: _deleteExpense
    }
    
    function _addExpense (monthId, expense) {

        //return $http.post(endpoint + monthId + 'expenses', expense);
        return expense;

    }
    
    function _deleteExpense (monthId, expenseId) {

        //return $http.delete(endpoint + monthId + 'expenses' + expenseId);

    }
    
}]);