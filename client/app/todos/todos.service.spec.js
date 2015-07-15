'use strict';

describe('todos service', function () {
  beforeEach(angular.mock.module('TodoMVC'));

  beforeEach(inject(function ($injector) {
    this.todos = $injector.get('todos');
  }));

  describe('#getAll', function () {
    it('gets all of the todos', function () {
      expect(this.todos.getAll()).toEqual(this.todos._todos);
    });
  });

  describe('#add', function () {
    beforeEach(function () {
      this.todos.add('sup');
    });

    it('adds a todo with provided description', function () {
      expect(this.todos._todos[0].description).toBe('sup');
    });

    it('sets the new todo\'s completed state to false', function () {
      expect(this.todos._todos[0].completed).toBe(false);
    });

    it('sets the new todo\'s editing state to false', function () {
      expect(this.todos._todos[0].editing).toBe(false);
    });
  });

  describe('#destroy', function () {
    beforeEach(function () {
      this.todos.add('call mom');
      this.todos.add('exercise');
    });

    it('removes a todo', function () {
      var callMom = this.todos._todos[0];
      var exercise = this.todos._todos[1];
      this.todos.destroy(callMom.id);
      expect(this.todos._todos.length).toBe(1);
      expect(this.todos._todos[0]).toEqual(exercise);
    });

    it('does not removes a todo if the id is invalid', function () {
      this.todos.destroy('wrong id');
      expect(this.todos._todos.length).toBe(2);
    });
  });

  describe('#_getTodosByState', function () {
    beforeEach(function () {
      this.todos.add('call mom');
      this.todos.add('exercise');
      this.todos._todos[0].completed = true;
    });

    it('returns any array of todos that match the key\'s value', function () {
      expect(this.todos._getTodosByState('completed', true))
        .toEqual([this.todos._todos[0]]);
    });
  });

  describe('#getCompleted', function () {
    beforeEach(function () {
      spyOn(this.todos, '_getTodosByState');
      this.todos.getCompleted();
    });

    it('calls #_getTodosByState', function () {
      expect(this.todos._getTodosByState).toHaveBeenCalledWith('completed', true);
    });
  });

  describe('#getActive', function () {
    beforeEach(function () {
      spyOn(this.todos, '_getTodosByState');
      this.todos.getActive();
    });

    it('calls #_getTodosByState', function () {
      expect(this.todos._getTodosByState).toHaveBeenCalledWith('completed', false);
    });
  });

  describe('#clearCompleted', function () {
    beforeEach(function () {
      this.todos.add('call mom');
      this.todos.add('exercise');
      this.todos._todos[0].completed = true;
      this.todos.clearCompleted();
    });

    it('removes all of the completed todos', function () {
      expect(this.todos._todos.length).toBe(1);
      expect(this.todos._todos[0].description).toBe('exercise');
    });
  });
});
