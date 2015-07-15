'use strict';

describe('TodosController', function () {
  beforeEach(angular.mock.module('TodoMVC'));

  beforeEach(inject(function ($controller, $injector) {
    this.ctrl = $controller('TodosController');
    this.todos = $injector.get('todos');
  }));

  describe('toggleTodoDone', function () {
    beforeEach(function () {
      this.todo = {};
    });

    it('sets the todo to completed', function () {
      this.todo.completed = false;
      this.ctrl.toggleTodoDone(this.todo);
      expect(this.todo.completed).toBe(true);
    });

    it('sets the todo to uncompleted', function () {
      this.todo.completed = true;
      this.ctrl.toggleTodoDone(this.todo);
      expect(this.todo.completed).toBe(false);
    });
  });

  describe('add', function () {
    beforeEach(function () {
      spyOn(this.todos, 'add');
    });

    it('adds a todo', function () {
      var todo = {};
      this.ctrl.add(todo);
      expect(this.todos.add).toHaveBeenCalledWith(todo);
    });
  });
});
