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
      debug: true
    },
    files: [
      'client/app/app.js',
      'client/app/utils/crossBrowser_initKeyboardEvent.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'client/app/**/*.spec.js'
    ]
  });
};
