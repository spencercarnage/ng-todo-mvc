'use strict';

function todoDirective () {
  return {
    templateUrl: '/todos/todo.html'
  }
}

angular.module('TodoMVC').directive('todo', todoDirective);
