'use strict';

function activeDirective () {
  return {
    controller: 'ActiveController',
    controllerAs: 'activeCtrl',
    link: function (scope, element, attrs) {
      scope.$watch('activeCtrl.getActive().length', function (newValue, oldValue) {
        scope.activeCtrl.todoList = scope.activeCtrl.getActive();
      });
    }
  }
}

activeDirective.$inject = [];

angular.module('TodoMVC').directive('active', activeDirective);
