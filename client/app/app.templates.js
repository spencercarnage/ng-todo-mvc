function appTemplatesRunBlock ($templateCache) {
  'use strict';

  $templateCache.put('/routes/all/index.html',
    "<section id=\"todoapp\" todos=\"allCtrl.todoList\"></section>"
  );


  $templateCache.put('/todo/markAllAsCompleted.html',
    "<input id=\"toggle-all\" type=\"checkbox\"/>"
  );


  $templateCache.put('/todos/markAllAsCompleted.html',
    "<input id=\"toggle-all\" type=\"checkbox\"/>"
  );


  $templateCache.put('/todos/todo.html',
    "<div class=\"view\"><input type=\"checkbox\" ng-checked=\"todo.completed\" ng-model=\"todo.completed\" class=\"toggle\"/><label ng-dblclick=\"todo.editing = !todo.editing\">{{todo.description}}</label><button ng-click=\"todosCtrl.destroy(todo.id)\" class=\"destroy\"></button><input ng-if=\"todo.editing\" value=\"{{todo.description}}\" todos-edit=\"todo\" ng-model=\"todo.description\" class=\"edit\"/></div>"
  );


  $templateCache.put('/todos/todos.html',
    "<header id=\"header\"><h1>todos</h1><input id=\"new-todo\" ng-model=\"description\" placeholder=\"What needs to be done?\" add=\"\"/></header><section id=\"main\"><div todos-mark-all-as-completed=\"todosCtrl.markAllAsCompleted(completed)\" ng-if=\"todosCtrl.todoList.length\"></div><label for=\"toggle-all\">Mark all as complete</label><ul id=\"todo-list\"><li ng-repeat=\"todo in todosCtrl.todoList track by todo.id\" todo-destroy=\"todosCtrl.destroy(todo)\" ng-class=\"{completed: todo.completed, editing: todo.editing}\"><div todo=\"todo\"></div></li></ul></section><footer id=\"footer\" ng-show=\"todosCtrl.totalCount\"><span id=\"todo-count\"><strong>{{todosCtrl.remainingCount}}</strong><span ng-pluralize=\"\" count=\"todosCtrl.remainingCount\" when=\"{'one': 'item', 'other': 'items'}\">left</span></span><ul id=\"filters\"><li><a ng-class=\"{selected: todosCtrl.isStateActive('all')}\" ui-sref=\"all\">All</a></li><li><a ng-class=\"{selected: todosCtrl.isStateActive('active')}\" ui-sref=\"active\">Active</a></li><li><a ng-class=\"{selected: todosCtrl.isStateActive('completed')}\" ui-sref=\"completed\">Completed</a></li></ul><button id=\"clear-completed\" ng-if=\"todosCtrl.completedCount\" ng-click=\"todosCtrl.clearCompleted()\">Clear completed ({{todosCtrl.completedCount}})</button></footer>"
  );

}
appTemplatesRunBlock.$inject = ['$templateCache'];
const appTemplatesModuleName = 'app.templates';
export {appTemplatesRunBlock, appTemplatesModuleName};