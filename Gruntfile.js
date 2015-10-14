module.exports = function(grunt) {


  var path = require("path");

  require("load-grunt-config")(grunt, {
    configPath: path.join(process.cwd(), "build/task"),
    //env: grunt.file.readJSON("env.json"),
    init: true
  });

  // Default task(s).
  grunt.registerTask("default", ["clean:all", "bower", "copy", "connect", "watch"]);
  grunt.registerTask("serve", ["clean:code", "copy", "connect", "watch"]);
};