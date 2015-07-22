'use strict';

var BaseController = require('../base.controller');

function DoneController (todos, $state, $scope) {
  BaseController.call(this, todos, $state, $scope);
}

DoneController.prototype = Object.create(BaseController);
DoneController.prototype.constructor = DoneController;

DoneController.prototype.setTodos = function () {
  this.todoList = this.todos.getDone();
};

DoneController.$inject = ['todos', '$state', '$scope'];

angular.module('TodoMVC').controller('DoneController', DoneController);
