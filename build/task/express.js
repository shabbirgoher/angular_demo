module.exports = function(){
	var path = require('path');
	return {server: {
		options: {
			hostname: "localhost",
			bases: ["out"],
			showStack: true,
			open: true,
			server: path.resolve("./build/server")
		}
	}}
};