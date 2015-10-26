module.exports = function(){
	return {server: {
		options: {
			hostname: "localhost",
			bases: ["out"],
			showStack: true,
			open: true
		}
	}}
};