'use strict';

function Todos () {
  this._todos = [];

  this.getAll = function () {
    return this._todos;
  }

  this.add = function (description) {
    this._todos.push({
      id: Date.now(),
      description: description,
      editing: false,
      completed: false
    });
  }

  this.destroy = function (id) {
    for (var i = 0, l = this._todos.length; i < l; i++) {
      if (this._todos[i].id === id) {
        this._todos.splice(i, 1);
        break;
      }
    }
  }

  this.getCompleted = function () {
    return this._getTodosByState('completed', true);
  };

  this.getActive = function () {
    return this._getTodosByState('completed', false);
  };

  this._getTodosByState = function (key, state) {
    return this._todos.filter(function(todo) {
      if (todo[key] === state) {
        return todo;
      }
    });
  };

  this.clearCompleted = function () {
    for (var i = this._todos.length - 1; i >= 0; i--) {
      if (this._todos[i].completed) {
        this._todos.splice(i, 1);
      }
    }
  };

  this.markAllAsCompleted = function (completed) {
    this._todos.forEach(function(todo, i) {
      todo.completed = completed;
    });
  }

  this.getRemainingCount = function () {
    let remaining = 0;

    this._todos.forEach(function(todo, i) {
      if (!todo.completed) {
        ++remaining;
      }
    });

    return remaining;
  }

  this.getCompletedCount = function () {
    const remainingCount = this.getRemainingCount();
    return this._todos.length - remainingCount;
  }
}

angular.module('TodoMVC').service('todos', Todos);
