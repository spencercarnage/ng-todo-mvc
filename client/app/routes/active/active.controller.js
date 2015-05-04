'use strict';

function ActiveController (todo) {
  this.todoList = todo.getActive();
  
  Object.defineProperty(this, 'todo', {
    value: todo
  })
}

ActiveController.prototype.getActive = function () {
  return this.todo.getActive();
};

ActiveController.$inject = ['todo'];

angular.module('todos').controller('ActiveController', ActiveController);
