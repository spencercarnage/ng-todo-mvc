'use strict';

function appRoutesConfig ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('all', {
      url: '/',
      controller: 'AllController',
      controllerAs: 'allCtrl',
      resolve: {
        todos: 'todos'
      },
      templateUrl: '/routes/all/index.html'
    })

    .state('done', {
      url: '/done',
      controller: 'DoneController',
      controllerAs: 'doneCtrl',
      resolve: {
        todos: 'todos'
      },
      templateUrl: '/routes/done/done.html'
    })
    
    .state('active', {
      url: '/active',
      controller: 'ActiveController',
      controllerAs: 'activeCtrl',
      resolve: {
        todos: 'todos'
      },
      templateUrl: '/routes/active/active.html'
    })
}

appRoutesConfig.$inject = [
  '$stateProvider',
  '$urlRouterProvider'
];

angular.module('TodoMVC').config(appRoutesConfig);
