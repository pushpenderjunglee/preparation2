module.exports = function(grunt) {
    grunt.initConfig({
        uglify: {
          options:{
            sourceMap:true
          },
            my_target: {
              files: {
                'dest/output.min.js': ['Router/routes.js','controller/*.js']
              }
            }
          }   
            
    });
  
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    // Default task(s).
    grunt.registerTask('default', ['uglify','minify']);
  
  };