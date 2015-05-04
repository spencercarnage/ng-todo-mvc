'use strict';

export class TodosController {
  constructor (todos, $state) {
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

  toggleTodoDone (todo) {
    todos.completed = !todos.completed;
  }

  add (description) {
    this.todos.add(description);
  }

  clearCompleted () {
    this.todos.clearCompleted();
  }

  destroy (id) {
    this.todos.destroy(id);
  }

  markAllAsCompleted (completed) {
    this.todos.markAllAsCompleted(completed);
  }

  isStateActive (state) {
    return this.$state.is(state);
  }
}

TodosController.$inject = ['todos', '$state'];
