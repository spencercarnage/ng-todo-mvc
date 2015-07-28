'use strict';

var BaseController = require('../base.controller');

function ActiveController (todos, $state, $scope) {
  BaseController.call(this, todos, $state, $scope);
}

ActiveController.prototype = Object.create(BaseController.prototype);
ActiveController.prototype.constructor = ActiveController;

ActiveController.prototype.setTodos = function () {
  this.todoList = this.todos.getActive();
};

ActiveController.$inject = ['todos', '$state', '$scope'];

angular.module('TodoMVC').controller('ActiveController', ActiveController);
