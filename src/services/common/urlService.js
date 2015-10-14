define([], function(){
	function urlService(){

		function breezoMeterUrl(){
			return "/proxyserve/breezo";
		}

		return {
			breezoMeterUrl: breezoMeterUrl
		};
	}

	return urlService;
});