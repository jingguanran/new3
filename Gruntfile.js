module.exports = function(grunt) {

  
  grunt.initConfig({
    
    uglify: {    
      build: {
       files: {                                   // Dictionary of files 
        'build/js/new.min.js': 'src/js/new.js' 

        
      }
      }
    },
    htmlmin: {    
      build: {
        options: {                                 // Target options 
        removeComments: true,
        collapseWhitespace: true
      },
      files: {                                   // Dictionary of files 
        'build/index.html': 'src/index.html'     // 'destination': 'source' 
        
      }
      }
    }
  });

  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['uglify','htmlmin']);

};