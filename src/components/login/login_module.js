define(["angular", "components/login/LoginController"], function(angular, loginController){
	var loginModule = angular.module("login.module", []);

	loginModule.controller("LoginController", loginController);

	loginModule.config(["$stateProvider", function($stateProvider){
		$stateProvider.state("login", {
			url: "/login",
			template: "<div ui-view></div>",
			controller: ["$state", function($state){
				$state.go("login.1fa");
			}]
		})
		.state("login.1fa", {
			//url: "/1fa",
			templateUrl: "components/login/login1fa.html",
			controller: "LoginController",
			controllerAs: "login"
		})
		.state("login.2fa", {
			//url: "/2fa",
			templateUrl: "components/login/login2fa.html",
			controller: "LoginController",
			controllerAs: "login"
		});
	}]);
});