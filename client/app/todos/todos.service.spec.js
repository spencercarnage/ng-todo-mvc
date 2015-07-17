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

    it('sets the new todo\'s done state to false', function () {
      expect(this.todos._todos[0].done).toBe(false);
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
      this.todos._todos[0].done = true;
    });

    it('returns any array of todos that match the key\'s value', function () {
      expect(this.todos._getTodosByState('done', true))
        .toEqual([this.todos._todos[0]]);
    });
  });

  describe('#getDone', function () {
    beforeEach(function () {
      spyOn(this.todos, '_getTodosByState');
      this.todos.getDone();
    });

    it('calls #_getTodosByState', function () {
      expect(this.todos._getTodosByState).toHaveBeenCalledWith('done', true);
    });
  });

  describe('#getActive', function () {
    beforeEach(function () {
      spyOn(this.todos, '_getTodosByState');
      this.todos.getActive();
    });

    it('calls #_getTodosByState', function () {
      expect(this.todos._getTodosByState).toHaveBeenCalledWith('done', false);
    });
  });

  describe('#clearDone', function () {
    beforeEach(function () {
      this.todos.add('call mom');
      this.todos.add('exercise');
      this.todos._todos[0].done = true;
      this.todos.clearDone();
    });

    it('removes all of the done todos', function () {
      expect(this.todos._todos.length).toBe(1);
      expect(this.todos._todos[0].description).toBe('exercise');
    });
  });

  describe('#setDoneStatusForAll', function () {
    beforeEach(function () {
      this.todos.add('call mom');
      this.todos.add('exercise');
    });
    
    it('marks all todos as done', function () {
      this.todos.setDoneStatusForAll(true);
      expect(this.todos._todos[0].done).toBe(true);
      expect(this.todos._todos[1].done).toBe(true);
    });

    it('marks all todos as indone', function () {
      this.todos.setDoneStatusForAll(false);
      expect(this.todos._todos[0].done).toBe(false);
      expect(this.todos._todos[1].done).toBe(false);
    });
  });

  describe('#getPendingCount', function () {
    beforeEach(function () {
      this.todos.add('call mom');
      this.todos.add('exercise');
      this.todos._todos[0].done = true;
    });

    it('returns the number of pending todos', function () {
      expect(this.todos.getPendingCount()).toBe(1);
    });
  });

  describe('#getDoneCount', function () {
    beforeEach(function () {
      this.todos.add('call mom');
      this.todos.add('exercise');
      this.todos._todos[0].done = true;
    });

    it('returns the number of done todos', function () {
      expect(this.todos.getDoneCount()).toBe(1);
    });
  });
});
