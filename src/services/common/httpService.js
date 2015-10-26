define([], function() {
	function HttpService($http) {
		function getJson(url) {
			return $http.get(url).then(function(response){
				return response.data;
			});
		}
		
		function postJson(ur, data){
			return $http.post(url, data).then(function(response){
				return response.data;
			});
		}
		
		return {
			getJson: getJson,
			postJson: postJson
		};
	}
	
	HttpService.$inject = ["$http"];
	return HttpService;
});