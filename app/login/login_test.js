'use strict';

describe('economyApp.login module', function() {

  beforeEach(module('economyApp.login'));
  
  describe('Controller: LoginCtrl', function(){
      
    var loginCtrl, scope, loginService;
      
    beforeEach(function() {
        
        var mockLoginService = {};
        
        module('economyApp.login', function($provide) {
            $provide.value('loginService', mockLoginService);
        });

        inject(function($q) {
            mockLoginService.user = [
                {
                    "username":"username",
                    "password":"password",
                    "email":"mock@gmail.com"
                }
            ];

            mockLoginService.login = function() {
                var defered = $q.defer();
                
                var promise = defered.promise;

                defered.resolve(this.user);

                return promise;
            };
            
        });
    });
      
    beforeEach(inject(function($controller, $rootScope, _loginService_) {
        
        loginService = _loginService_;
        
        scope = $rootScope.$new();
        
        loginCtrl = $controller('LoginCtrl', {
            $scope: scope,
            loginService: loginService
        });
        
        scope.$digest(); //resolve all the promises we have on the mocked service
        
    }));

    it('should define the controller , get an instance of loginService and empty credentials', function() {
        expect(loginCtrl).toBeDefined();
        expect(loginService).toBeDefined();
        expect(scope.credentials.email).toBe('');
        expect(scope.credentials.password).toBe('');
        expect(scope.credentials.remember).toBe(false);
    });
        
    it('should call login method on loginService on calling Login and get user', function() {
       
        var data = {
            "email":"javier.aviles@gmail.com",
            "password":"password",
            "remember":true
        }
        
        scope.login(data);
        
        expect(scope.user).toEqual({
            "username":"Javier Avilés",
            "password":"password",
            "email":"javier.aviles@gmail.com",
            "remember":true
        });
        
    });
      
  });
});