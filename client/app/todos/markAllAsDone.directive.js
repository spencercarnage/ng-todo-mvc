'use strict';

function markAllAsDoneDirective () {
  return {
    replace: true,
    templateUrl: '/todos/markAllAsDone.html',
    scope: {
      markAllAsDone: '&todosMarkAllAsDone'
    },
    link: function (scope, element, attrs) {
      element.on('change', function (e) {
        scope.$apply(function () {
          scope.markAllAsDone({
            done: element[0].checked
          });
        });
      });
    }
  };
}

angular.module('TodoMVC').directive('markAllAsDone', markAllAsDoneDirective);
