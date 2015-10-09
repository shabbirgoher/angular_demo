module.exports = {
	scripts: {
		files: [
		"src/**/*.js",
		"src/**/*.html"
		],
		tasks: [
		"copy"
		],
		options: {
          nospawn: true, //Without this option specified express won't be reloaded
          atBegin: true,
          livereload: true
      	}
  	}
};	