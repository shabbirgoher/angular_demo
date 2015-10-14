define([], function(){
	function BreezoMeterService(urlService, httpService){

		function breezos(){
			var url = urlService.breezoMeterUrl();
			return httpService.getJson(url);
		}

		return {
			breezos: breezos
		};
	}

	BreezoMeterService.$inject = ["urlService", "httpService"];
	return BreezoMeterService;
});