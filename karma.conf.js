'use strict';

module.exports = function (config) {
  config.set({
    basePath: './',
    frameworks: ['jasmine', 'browserify'],
    preprocessors: {
      'client/**/*.js': ['browserify']
    },
    browsers: ['Chrome'],
    singleRun: false,
    browserify: {
      debug: true,
      transform: [
        ['babelify', {
          optional: 'runtime'
        }]
      ]
    },
    files: [
      'client/app/app.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'client/app/**/*.spec.js'
    ]
  });
};
