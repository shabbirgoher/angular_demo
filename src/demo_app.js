define(["angular", "uiRouter", "login.module"], function(angular){
	var app = angular.module("app", [ "ui.router", "login.module"]);

	app.config([ "$urlRouterProvider", function($urlRouterProvider) {
		$urlRouterProvider.otherwise('/login');
	} ]);
	// $state.go("conversation");
	angular.bootstrap(document, [ 'app' ]);
	
});