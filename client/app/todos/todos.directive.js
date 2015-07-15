'use strict';

function todosDirective () {
  return {
    scope: {
      todoList: '=todos'
    },
    controller: 'TodosController',
    controllerAs: 'todosCtrl',
    bindToController: true,
    templateUrl: '/todos/todos.html'
  }
}

angular.module('TodoMVC').directive('todos', todosDirective);
