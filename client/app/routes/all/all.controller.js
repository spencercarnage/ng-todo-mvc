'use strict';

var BaseController = require('../base.controller');

function AllController (todos, $state, $scope) {
  BaseController.call(this, todos, $state, $scope);
}

AllController.prototype = Object.create(BaseController);
AllController.prototype.constructor = AllController;

AllController.prototype.setTodos = function () {
  this.todoList = this.todos.getAll();
};

AllController.$inject = ['todos', '$state', '$scope'];

angular.module('TodoMVC').controller('AllController', AllController);
