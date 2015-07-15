'use strict';

function KeyEnter () {
  return function (event, element, callback) {
    console.log('key event', event);
    if (event.which == 13 || event.keyCode == 13) {
      callback.call(element);
    }
  }
}

angular.module('TodoMVC.utils').service('TodoMVC.utils.keyEnter', KeyEnter);
