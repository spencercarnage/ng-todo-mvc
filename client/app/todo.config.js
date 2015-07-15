'use strict';

function config ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  
  $stateProvider
    .state('all', {
      url: '/',
      controller: 'AllController',
      controllerAs: 'allCtrl',
      templateUrl: 'partials/all.html'
    })
    
    .state('completed', {
      url: '/completed',
      controller: 'CompletedController',
      controllerAs: 'completedCtrl',
      templateUrl: 'partials/completed.html'
    })
    
    .state('active', {
      url: '/active',
      controller: 'ActiveController',
      controllerAs: 'activeCtrl',
      templateUrl: 'partials/active.html'
    });
}

config.$inject = [
  '$stateProvider',
  '$urlRouterProvider'
];

angular.module('TodoMVC').config(config);
