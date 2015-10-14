define([], function() {
	function HttpService($http) {
		function getJson(url) {
			return $http.get(url);
		}
		
		function postJson(ur, data){
			return $http.post(url, data);
		}
		
		return {
			getJson: getJson,
			postJson: postJson
		};
	}
	
	HttpService.$inject = ["$http"];
	return HttpService;
});