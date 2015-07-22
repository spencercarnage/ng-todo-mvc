'use strict';

function addDirective (keyEnter) {
  return {
    scope: {
      add: '&'
    },
    link: function(scope, element, attrs) {
      element.on('keypress', function(e) {
        keyEnter(e, element, function() {
          scope.$apply(function() {
            scope.add({
              description: element.val()
            });
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
