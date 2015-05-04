'use strict';

export function todosDirective () {
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
