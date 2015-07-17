'use strict';


require('angular').module('TodoMVC', [
  require('angular-ui-router'),
  require('./utils/utils.app')
]);

require('./app.routes');
require('./app.templates');
require('./routes/all/all.controller');
require('./routes/done/done.controller');
require('./routes/active/active.controller');
require('./todos/todos.directive');
require('./todos/add.directive');
require('./todos/markAllAsDone.directive');
require('./todos/todos.controller');
require('./todos/todos.service');
require('./todos/todos.service');
