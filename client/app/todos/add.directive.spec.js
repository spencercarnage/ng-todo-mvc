'use strict';

describe('add directive', function () {
  beforeEach(angular.mock.module('TodoMVC', function ($provide) {
    $provide.decorator('TodoMVC.utils.keyEnter', function ($delegate) {
      return jasmine.createSpy('keyEnterSpy').and.callFake($delegate);
    });
  }));

  beforeEach(inject(function ($injector) {
    this.$compile = $injector.get('$compile');
    this.scope = $injector.get('$rootScope').$new();
    this.keyEnter = $injector.get('TodoMVC.utils.keyEnter');
  }));

  describe('structure', function () {
    beforeEach(function () {
      this.scope.add = jasmine.createSpy('addSpy');
      this.element = angular.element('<input add="add(description)"/>');
      this.element = this.$compile(this.element)(this.scope);
      this.scope.$apply();
    });

    describe('keyEnter', function () {
      beforeEach(function () {
        this.element.val('test');
        this.element.triggerHandler({
          type: 'keypress',
          keyCode: 13,
          which: 13
        });
      });

      it('empties the element\'s value', function () {
        expect(this.element.val()).toBe('');
      });

      it('calls the scope.add', function () {
        expect(this.scope.add).toHaveBeenCalledWith('test');
      });
    });
  });
});
