'use strict';

export function addDirective (keyEnter) {
  return {
    link: function(scope, element, attrs) {
      element.on('keypress', function(e) {
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
