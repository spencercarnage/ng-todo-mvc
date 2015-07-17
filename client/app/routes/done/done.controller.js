'use strict';

function DoneController (todos) {
  this.todoList = todos.getDone();
  this.todos = todos;
}

DoneController.prototype.getDone = function () {
  return this.todos.getDone();
};

DoneController.$inject = ['todos'];

angular.module('TodoMVC').controller('DoneController', DoneController);
