'use strict';

function appRoutesConfig ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('all', {
      url: '/',
      controller: 'AllController',
      controllerAs: 'mainCtrl',
      resolve: {
        todos: 'todos'
      },
      templateUrl: '/app.html'
    })

    .state('done', {
      url: '/done',
      controller: 'DoneController',
      controllerAs: 'mainCtrl',
      resolve: {
        todos: 'todos'
      },
      templateUrl: '/app.html'
    })
    
    .state('active', {
      url: '/active',
      controller: 'ActiveController',
      controllerAs: 'mainCtrl',
      resolve: {
        todos: 'todos'
      },
      templateUrl: '/app.html'
    })
}

appRoutesConfig.$inject = [
  '$stateProvider',
  '$urlRouterProvider'
];

angular.module('TodoMVC').config(appRoutesConfig);
