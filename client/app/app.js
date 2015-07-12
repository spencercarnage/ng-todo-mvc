'use strict';

import {appRoutesConfig}  from './app.routes';
import {appTemplatesRunBlock} from './app.templates';
import {AllController} from './routes/all/all.controller';
import {Todos} from './todos/todos.service';
import {todosDirective} from './todos/todos.directive';
import {todoDirective} from './todos/todo.directive';
import {addDirective} from './todos/add.directive';
import {TodosController} from './todos/todos.controller';
import {utilsAppName} from './utils/utils.app';
import {markAllAsCompletedDirective} from './todos/markAllAsCompleted.directive';

require('angular')
  .module('TodoMVC', [
    require('angular-ui-router'),
    utilsAppName
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
  .directive('todo', todoDirective)
  .directive('add', addDirective)
  .directive('todosMarkAllAsCompleted', markAllAsCompletedDirective)
;
