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
    
}]);