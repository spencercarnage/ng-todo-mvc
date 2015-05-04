'use strict';

import {appRoutesConfig}  from './app.routes';
import {appTemplatesRunBlock} from './app.templates';
import {AllController} from './routes/all/all.controller';
import {Todos} from './todos/todos.service';
import {todosDirective} from './todos/todos.directive';
import {TodosController} from './todos/todos.controller';

require('angular')
  .module('TodoMVC', [
    require('angular-ui-router'),
  ])

  // Config
  .config(appRoutesConfig)

  // Run
  .run(appTemplatesRunBlock)

  // Controllers
  .controller('AllController', AllController)
  .controller('TodosController', TodosController)

  // Services
  .service('todos', Todos)

  // Directives
  .directive('todos', todosDirective)
;
