'use strict';

describe('TodosController', function () {
  beforeEach(angular.mock.module('TodoMVC'));

  beforeEach(inject(function ($controller, $injector) {
    var ctrlFn = $controller('TodosController', {}, true);
    ctrlFn.instance.repopulateList = angular.noop;
    this.ctrl = ctrlFn();
    this.todos = $injector.get('todos');
  }));

  describe('toggleTodoDone', function () {
    beforeEach(function () {
      this.todo = {};
    });

    it('sets the todo to done', function () {
      this.todo.done = false;
      this.ctrl.toggleTodoDone(this.todo);
      expect(this.todo.done).toBe(true);
    });

    it('sets the todo to undone', function () {
      this.todo.done = true;
      this.ctrl.toggleTodoDone(this.todo);
      expect(this.todo.done).toBe(false);
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

  describe('markAllAsDone', function () {
    it('updates the done status for all todos', function () {
      spyOn(this.todos, 'setDoneStatusForAll');
      this.ctrl.markAllAsDone();
      expect(this.todos.setDoneStatusForAll)
        .toHaveBeenCalledWith(this.ctrl.areAllDone);
    });

    it('repopulates the list of todos', function () {
      spyOn(this.ctrl, 'repopulateList');
      this.ctrl.markAllAsDone();
      expect(this.ctrl.repopulateList).toHaveBeenCalled();
    });
  });
});
