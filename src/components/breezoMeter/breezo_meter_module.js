define(["angular", "components/breezoMeter/breezoMeterController", "components/breezoMeter/breezoMeterService"], function(angular, BreezoMeterController, BreezoService){
	var breezo = angular.module("app.breezo", []);

	breezo.controller("BreezoMeterController", BreezoMeterController);
	breezo.factory("BreezoService", BreezoService);

	breezo.config(["$stateProvider", function($stateProvider){
		$stateProvider.state("breezo", {
			url: "/breezo?id",
			templateUrl: "components/breezoMeter/breezo_meter.html",
			controller: "BreezoMeterController",
			controllerAs: "breezoMeterController"
		}).state("breezo.child", {
			url: "/child",
			template: "child",
			controller: ["$stateParams", function($stateParams){
				console.log("stateParams child controller", $stateParams.id);
			}]
		});
	}])
});