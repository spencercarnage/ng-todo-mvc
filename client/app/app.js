'use strict';

import 'angular';
import 'angular-ui-router';
import {appRoutesConfig}  from './app.routes';
import {appTemplatesRunBlock} from './app.templates';
import {AllController} from './routes/all/all.controller';
import {Todos} from './todos/todos.service';
import {todosDirective} from './todos/todos.directive';
import {todoDirective} from './todos/todo.directive';
import {addDirective} from './todos/add.directive';
import {activeDirective} from './todos/active.directive';
import {TodosController} from './todos/todos.controller';
import {utilsAppName} from './utils/utils.app';
import {markAllAsCompletedDirective} from './todos/markAllAsCompleted.directive';
import {appConfig} from './todo.config';

angular
  .module('TodoMVC', [
    'angular-ui-router',
    utilsAppName
  ])

  // Config
  .config(appRoutesConfig)
  .config(appConfig)

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
  .directive('active', activeDirective)
;
