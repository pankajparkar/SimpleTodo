(function(window, angular, undefined){
	'use strict';

	angular.module('todoApp').component('todoItemController', {
		bindings: {
			item: '<'
		},
		require: {
			todoList: "^"
		},
        templateUrl: "/app/todo-item-component.html",
		controller: "todoItemController",
		controllerAs: "todoItem"
    });

})(window, window.angular);