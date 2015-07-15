'use strict';

function TodosController (todos, $state) {
  this.todos = todos;
  this.$state = $state;

  Object.defineProperties(this, {
    'remainingCount': {
      get: function () {
        return todos.remainingCount;
      }
    },
    'completedCount': {
      get: function () {
        return todos.completedCount;
      }
    },
    totalCount: {
      get: function () {
        return todos.getAll().length;
      }
    }
  });
}

TodosController.prototype.toggleTodoDone = function (todo) {
  todo.completed = !todo.completed;
};

TodosController.prototype.add = function (description) {
  this.todos.add(description);
};

TodosController.prototype.clearCompleted = function () {
  this.todos.clearCompleted();
};

TodosController.prototype.destroy = function (id) {
  this.todos.destroy(id);
};

TodosController.prototype.markAllAsCompleted = function (completed) {
  this.todos.markAllAsCompleted(completed);
};

TodosController.prototype.isStateActive = function (state) {
  return this.$state.is(state);
};


TodosController.$inject = ['todos', '$state'];

angular.module('TodoMVC').controller('TodosController', TodosController);
