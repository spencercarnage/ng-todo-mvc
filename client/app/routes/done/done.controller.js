'use strict';

function DoneController (todo) {
  this.todoList = todo.getDone();
  
  Object.defineProperty(this, 'todo', {
    value: todo
  });
}

DoneController.prototype.getDone = function () {
  return this.todo.getDone();
};

DoneController.$inject = ['todo'];

angular.module('todos').controller('DoneController', DoneController);
