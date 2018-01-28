(function () {
    'use strict';

    angular
        .module('app')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['$scope', 'UserService','$routeParams', '$location', '$rootScope', 'FlashService'];
    function RegisterController($scope, UserService, $routeParams, $location, $rootScope, FlashService) {
        var vm = this;

        vm.register = register;
		
		
		$rootScope.button = $routeParams.id;

        function register() {
			
            vm.dataLoading = true;
            UserService.Create(vm.user)
                .then(function (response) {
                    if (response.success) {
                        FlashService.Success('Booked successful', true);
                        $location.path('/login');
						if($rootScope.tur==1)
						{
							$rootScope.testButton1 = true;
						}
						if($rootScope.tur==2)
						{
							$rootScope.testButton2 = true;
						}
						if($rootScope.tur==3)
						{
							$rootScope.testButton3 = true;
						}
						if($rootScope.tur==4)
						{
							$rootScope.testButton4 = true;
						}
					    if($rootScope.tur==5)
						{
							$rootScope.testButton5 = true;
						}
						if($rootScope.tur==6)
						{
							$rootScope.testButton6 = true;
						}
						if($rootScope.tur==7)
						{
							$rootScope.testButton7 = true;
						}
						if($rootScope.tur==8)
						{
							$rootScope.testButton8 = true;
						}
                    } else {
                        FlashService.Error(response.message);
                        vm.dataLoading = false;
                    }
                });
        }
    }

})();
