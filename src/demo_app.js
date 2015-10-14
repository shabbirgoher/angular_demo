define(["angular", "common.urlService", "common.httpService", "uiRouter", "login.module", "app.breezo"], function(angular, urlService, httpService){
	var app = angular.module("app", [ "ui.router", "login.module", "app.breezo"]);

	app.factory("urlService", urlService);
	app.factory("httpService", httpService);

	app.config([ "$urlRouterProvider", function($urlRouterProvider) {
		$urlRouterProvider.otherwise('/breezo');
	} ]);
	// $state.go("conversation");
	angular.bootstrap(document, [ "app" ]);
	
});