'use strict';

angular.module('economyApp.services', [])

.factory('loginService', [function() {
    
    return {
        login: function(credentials){
            
            var user = {
                "username":"Javier Avilés",
                "password":credentials.password,
                "email":credentials.email,
                "remember":credentials.remember
            }
            
            return user;
        }
    }
    
}]);