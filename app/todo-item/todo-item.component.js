(function(window, angular, undefined){
	'use strict';
	
	//Dumb component
	angular.module('todoApp').component('todoItem', {
		bindings: {
			item: '<'
		},
		require: {
			todoList: "^todoList"
		},
        templateUrl: "/app/todo-item/todo-item.component.html",
		controller: angular.noop, //TODO look for alternative
		controllerAs: "todoItem"
    });

})(window, window.angular);