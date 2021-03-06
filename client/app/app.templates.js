angular.module("TodoMVC").run(["$templateCache", function ($templateCache) {
  'use strict';

  $templateCache.put('/app.html',
    "<section id=\"todoapp\" todos=\"mainCtrl.todoList\" todos-repopulate-list=\"mainCtrl.repopulateList()\"></section>"
  );


  $templateCache.put('/routes/active/index.html',
    "<section id=\"todoapp\" todos=\"activeCtrl.todoList\"></section>"
  );


  $templateCache.put('/routes/all/index.html',
    "<section id=\"todoapp\" todos=\"allCtrl.todoList\"></section>"
  );


  $templateCache.put('/routes/done/index.html',
    "<section id=\"todoapp\" todos=\"doneCtrl.todoList\"></section>"
  );


  $templateCache.put('/todos/todo.html',
    "<div class=\"view\"><input type=\"checkbox\" ng-checked=\"todo.done\" ng-model=\"todo.done\" ng-click=\"todosCtrl.repopulateList()\" class=\"toggle\"/><label ng-dblclick=\"todo.editing = !todo.editing\">{{todo.description}}</label><button ng-click=\"todosCtrl.destroy(todo.id)\" class=\"destroy\"></button><input ng-if=\"todo.editing\" value=\"{{todo.description}}\" todos-edit=\"todo\" ng-model=\"todo.description\" class=\"edit\"/></div>"
  );


  $templateCache.put('/todos/todos.html',
    "<header id=\"header\"><h1>todos</h1><input id=\"new-todo\" nng-model=\"description\" placeholder=\"What needs to be done?\" add=\"todosCtrl.add(description)\"/></header><section id=\"main\"><input id=\"toggle-all\" type=\"checkbox\" ng-model=\"todosCtrl.areAllDone\" ng-change=\"todosCtrl.markAllAsDone()\"/><label for=\"toggle-all\">Mark all as complete</label><ul id=\"todo-list\"><li ng-repeat=\"todo in todosCtrl.todoList track by todo.id\" todo-destroy=\"todosCtrl.destroy(todo)\" ng-class=\"{done: todo.done, editing: todo.editing}\"><div todo=\"todo\"></div></li></ul></section><footer id=\"footer\" ng-show=\"todosCtrl.totalCount\"><span id=\"todo-count\"><strong>{{todosCtrl.remainingCount}}</strong><span ng-pluralize=\"\" count=\"todosCtrl.remainingCount\" when=\"{'one': ' item left', 'other': ' items left'}\"></span></span><ul id=\"filters\"><li><a ng-class=\"{selected: todosCtrl.isStateActive('all')}\" ui-sref=\"all\">All</a></li><li><a ng-class=\"{selected: todosCtrl.isStateActive('active')}\" ui-sref=\"active\">Active</a></li><li><a ng-class=\"{selected: todosCtrl.isStateActive('done')}\" ui-sref=\"done\">Done</a></li></ul><button id=\"clear-completed\" ng-if=\"todosCtrl.doneCount\" ng-click=\"todosCtrl.clearDone()\">Clear completed ({{todosCtrl.doneCount}})</button></footer>"
  );

}]);
