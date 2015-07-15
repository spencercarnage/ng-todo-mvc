'use strict';

function addDirective (keyEnter) {
  console.log('fuck');
  return {
    controller: 'TodosController',
    controllerAs: 'todosCtrl',
    bindToController: true,
    link: function(scope, element, attrs) {
      console.log('here');
      element.on('keypress', function(e) {
        console.log('key press', e);
        keyEnter(e, element, function() {
          scope.$apply(function() {
            scope.todosCtrl.add(element.val());
          });

          element.val('');

          e.preventDefault();
        });
      });
    }
  };
}

addDirective.$inject = ['TodoMVC.utils.keyEnter'];

angular.module('TodoMVC').directive('add', addDirective);
