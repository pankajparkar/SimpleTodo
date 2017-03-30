(function(window, angular, undefined){
	'use strict';

	angular.module('todoApp').component('todoItem', {
		bindings: {
			item: '<'
		},
		require: {
			todoList: "^todoList"
		},
        templateUrl: "/app/todo-item/todo-item.component.html",
		controller: "todoItemController",
		controllerAs: "todoItem"
    });

})(window, window.angular);