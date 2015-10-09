define([], function(){
	function LoginController($state){
		var controller = this;

		controller.login1fa = function(){
			$state.go("login.2fa");	
		};
	}

	LoginController.$inject = ["$state"];
	return LoginController;
});