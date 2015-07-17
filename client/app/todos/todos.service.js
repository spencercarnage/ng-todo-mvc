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
      done: false
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

  this.getDone = function () {
    return this._getTodosByState('done', true);
  };

  this.getActive = function () {
    return this._getTodosByState('done', false);
  };

  this._getTodosByState = function (key, state) {
    return this._todos.filter(function(todo) {
      if (todo[key] === state) {
        return todo;
      }
    });
  };

  this.clearDone = function () {
    for (var i = this._todos.length - 1; i >= 0; i--) {
      if (this._todos[i].done) {
        this._todos.splice(i, 1);
      }
    }
  };

  this.setDoneStatusForAll = function (done) {
    this._todos.forEach(function(todo, i) {
      todo.done = done;
    });
  };

  this.getPendingCount = function () {
    return this._todos.reduce(function(pending, todo) {
      if (!todo.done) {
        ++pending;
      }
      return pending;
    }, 0);
  }

  this.getDoneCount = function () {
    return this._todos.length - this.getPendingCount();
  }
}

angular.module('TodoMVC').service('todos', Todos);
