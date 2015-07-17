'use strict';

function ActiveController (todos) {
  this.todoList = todos.getActive();
  this.todos = todos;
}

ActiveController.prototype.getActive = function () {
  return this.todos.getActive();
};

ActiveController.$inject = ['todos'];

angular.module('TodoMVC').controller('ActiveController', ActiveController);
