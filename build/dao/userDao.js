function userDao(mongoose){
	var dao = this;
	var model = mongoose.model("hosts", {"_id": String, "service_key": String});
	function getKey(serviceName){
		return model.findOne({"_id": serviceName}).exec().then(function(model){
			return model.service_key;
		});
	}
	return {
		getKey: getKey
	};
}

module.exports = userDao;