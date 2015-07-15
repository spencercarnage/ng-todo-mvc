'use strict';

function markAllAsCompletedDirective () {
  return {
    replace: true,
    templateUrl: '/todos/markAllAsCompleted.html',
    scope: {
      markAllAsCompleted: '&todosMarkAllAsCompleted'
    },
    link: function (scope, element, attrs) {
      element.on('change', function (e) {
        scope.$apply(function () {
          scope.markAllAsCompleted({
            completed: element[0].checked
          });
        });
      });
    }
  };
};

angular.module('TodoMVC').directive('markAllAsCompleted', markerAllAsCompletedDirective);
