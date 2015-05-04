'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      options: {
        sourceMap: true
      },
      build: {
        src: 'client/app/app.js',
        dest: 'public/js/app.js'
      }
    },
    ngtemplates: {
      app: {
        src: 'tmp/templates/**/*.html',
        dest: 'client/app/app.templates.js'
      },
      options: {
        module: '<%= pkg.name %>',
        url: function(url) {
          return url.replace('tmp/templates/', '/');
        },
        bootstrap: function (module, script) {
          return 'function appTemplatesRunBlock ($templateCache) {\n' +
          script + '\n' +
          '}\n' + 
          'appTemplatesRunBlock.$inject = [\'$templateCache\'];\n' +
          'const appTemplatesModuleName = \'app.templates\';\n' +
          'export {appTemplatesRunBlock, appTemplatesModuleName};';
        }
      }
    },
    jade: {
      app: {
        files: [{
          expand: true,
          cwd: 'client/app',
          src: ['**/*.jade'],
          ext: '.html',
          dest: 'tmp/templates'
        }]
      }
    },
    watch: {
      js: {
        files: ['client/app/**/*.js'],
        tasks: ['browserify']
      },
      css: {
        files: 'client/app/app.css',
        tasks: ['copy:css']
      },
      jade: {
        files: ['client/app/**/*.jade'],
        tasks: ['jade', 'ngtemplates']
      }
    },
    copy: {
      css: {
        src: 'client/app/app.css',
        dest: 'public/css/app.css'
      }
    }
  });

  // Load the plugin that provides the 'uglify' task.
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', [
    'copy',
    'jade',
    'ngtemplates',
    'browserify',
    'watch'
  ]);

};
