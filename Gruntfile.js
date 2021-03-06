'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      options: {
        browserifyOptions: {
          debug: true
        }
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
          return [
            'angular.module("TodoMVC").run(["$templateCache", ',
            'function ($templateCache) {\n',
            script + '\n',
            '}]);\n'
          ].join('')
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
        tasks: ['browserify', 'karma:unit']
      },
      css: {
        files: 'client/app/app.css',
        tasks: ['copy:css']
      },
      index: {
        files: ['client/app/index.html'],
        tasks: ['copy:index']
      },
      jade: {
        files: ['client/app/**/*.jade'],
        tasks: ['jade', 'ngtemplates']
      }
    },
    clean: ['public/', 'tmp/'],
    copy: {
      index: {
        src: 'client/app/index.html',
        dest: 'public/index.html'
      },
      css: {
        src: 'client/app/app.css',
        dest: 'public/css/app.css'
      }
    },
    connect: {
      app: {
        options: {
          base: 'public',
          livereload: true
        }
      }
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-karma');

  // Default task(s).
  grunt.registerTask('default', [
    'clean',
    'copy',
    'jade',
    'ngtemplates',
    'browserify',
    'karma',
    'connect',
    'watch'
  ]);

};
