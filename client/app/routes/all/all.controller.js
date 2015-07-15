'use strict';

function AllController (todos) {
  this.todoList = todos.getAll();
}

AllController.$inject = ['todos'];

angular.module('TodoMVC').controller('AllController', AllController);
