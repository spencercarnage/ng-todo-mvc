'use strict';

class AllController {
  constructor (todos) {
    this.todoList = todos.getAll();
  }
}

AllController.$inject = ['todos'];

export { AllController };
