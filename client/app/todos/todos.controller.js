'use strict';

function TodosController (todos, $state) {
  this.todos = todos;
  this.$state = $state;
  this.todoList = todos.getAll();

  Object.defineProperties(this, {
    remainingCount: {
      get: function () {
        return todos.getPendingCount();
      }
    },
    doneCount: {
      get: function () {
        return todos.getDoneCount();
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
  todo.done = !todo.done;
};

TodosController.prototype.add = function (description) {
  this.todos.add(description);
};

TodosController.prototype.clearDone = function () {
  this.todos.clearDone();
};

TodosController.prototype.destroy = function (id) {
  this.todos.destroy(id);
};

TodosController.prototype.markAllAsDone = function (done) {
  this.todos.markAllAsDone(done);
};

TodosController.prototype.isStateActive = function (state) {
  return this.$state.is(state);
};


TodosController.$inject = ['todos', '$state'];

angular.module('TodoMVC').controller('TodosController', TodosController);
