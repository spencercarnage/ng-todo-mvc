'use strict';

function appRoutesConfig ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('all', {
      url: '/',
      controller: 'AllController',
      controllerAs: 'allCtrl',
      templateUrl: '/routes/all/index.html'
    })

    .state('completed', {
      url: '/completed',
      controller: 'CompletedController',
      controllerAs: 'completedCtrl',
      templateUrl: 'public/templates/completed.html'
    })
    
    .state('active', {
      url: '/active',
      controller: 'ActiveController',
      controllerAs: 'activeCtrl',
      templateUrl: 'public/templates/active.html'
    })
}

appRoutesConfig.$inject = [
  '$stateProvider',
  '$urlRouterProvider'
];

angular.module('TodoMVC').config(appRoutesConfig);
