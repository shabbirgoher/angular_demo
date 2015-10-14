define([], function(){

	function BreezoMeterController($q, BreezoService, $stateParams){
		var controller = this;
		
		console.log("stateParams breezo controller", $stateParams.id);
		function init(){
			$q.when(BreezoService.breezos()).then(function(response){
				controller.breezos = response;
			}).catch(function(error){
				console.log(error);
			});
		}

		init();
	}

	BreezoMeterController.$inject = ["$q", "BreezoService", "$stateParams"];
	return BreezoMeterController;
});