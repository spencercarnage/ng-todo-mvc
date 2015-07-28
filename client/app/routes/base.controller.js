'use strict';

/**
 * This is a base controller that is extended by the route's controller.
 */
function BaseController (todos, $state, $scope) {
  this.todos = todos;
  this.$state = $state;
  this.$scope = $scope;

  this.allTodos = todos.getAll();

  $scope.$watch(function () {
    return todos.getAll().length;
  }, function () {
    this.repopulateList();
  }.bind(this));
}

BaseController.prototype.repopulateList = function () {
  this.setTodos();
};

module.exports = BaseController;
