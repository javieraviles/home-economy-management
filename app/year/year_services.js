'use strict';

angular.module('economyApp.year.services', [])

.factory('yearService', ['$http', function($http) {
    
    var endpoint = "api/years/";
    
    return {
        getYear: _getYear
    }
    
    function _getYear (yearId) {

        //return $http.get(endpoint + yearId);
        return $http.get('/year/getYear_mock.json');

    }
    
}]);