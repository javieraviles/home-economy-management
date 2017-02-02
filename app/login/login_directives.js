'use strict';

angular.module('economyApp.login.directives', [])

.directive('checkCredential', [function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function($scope, $element, $attrs, ngModel){
            
            $scope.$watch('loginNotifications.error', function (value) {
                
                var validation = true;
                
                if(value=='wrong-email'&&$attrs.name=='email')
                    validation=false;
                
                if(value=='wrong-password'&&$attrs.name=='password')
                    validation=false;
                
                ngModel.$setValidity('check-credential',validation);
                
            }); 
            
        }
    };
}]);