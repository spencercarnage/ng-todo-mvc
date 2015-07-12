'use strict';

export function keyEnter () {
  return function (event, element, callback) {
    if (event.which == 13 || event.keyCode == 13) {
      callback.call(element);
    }
  }
};
