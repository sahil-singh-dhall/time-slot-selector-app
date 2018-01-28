(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$scope', '$rootScope', '$location', '$routeParams', 'AuthenticationService', 'FlashService'];
    function LoginController($scope, $rootScope, $location, $routeParams, AuthenticationService, FlashService) {
		
		
		
		
		
        var vm = this;
		
		//vm.gone = true;
		$scope.gone = true;
	
	$scope.chk = function(){
		alert(34555);
	}
		
		$scope.test = function(pass){
			
			$rootScope.tur = pass;
			location.href='http://localhost:8080/#!/register';
		}

        vm.login = login;

        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        })();

        function login() {
            vm.dataLoading = true;
            AuthenticationService.Login(vm.username, vm.password, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials(vm.username, vm.password);
                    $location.path('/');
                } else {
                    FlashService.Error(response.message);
                    vm.dataLoading = false;
                }
            });
        };
    }

})();
