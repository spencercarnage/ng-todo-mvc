'use strict';


require('angular').module('TodoMVC', [
  require('angular-ui-router'),
  require('./utils/utils.app')
]);

require('./todos/add.directive');
require('./todos/todos.controller');
require('./todos/todos.service');
