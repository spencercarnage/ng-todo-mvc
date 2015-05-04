'use strict';

export class Todos {
  constructor () {
    this._todos = [];
  }

  getAll () {
    return this._todos;
  }

  add (description) {
    this._todos.push({
      id: Date.now(),
      description: description,
      editing: false,
      completed: false
    });
  }

  destroy (id) {
    for (var i = 0, l = this._todos.length; i < l; i++) {
      if (this._todos[i].id === id) {
        this._todos.splice(i, 1);
        break;
      }
    }
  }

  getCompleted () {
    return this._todos.filter(function(todo) {
      if (todo.completed) {
        return todo;
      }
    });
  }

  getActive () {
    return this._todos.filter(function(todo) {
      if (!todo.completed) {
        return todo;
      }
    });
  };

  clearCompleted () {
    for (var i = this._todos.length - 1; i >= 0; i--) {
      if (todos[i].completed) {
        todos.splice(i, 1);
      }
    }
  };

  markAllAsCompleted (completed) {
    this._todos.forEach(function(todo, i) {
      todo.completed = completed;
    });
  }

  getRemainingCount () {
    let remaining = 0;

    this._todos.forEach(function(todo, i) {
      if (!todo.completed) {
        ++remaining;
      }
    });

    return remaining;
  }

  getCompletedCount () {
    const remainingCount = this.getRemainingCount();
    return this._todos.length - remainingCount;
  }
}

