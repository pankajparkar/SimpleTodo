(function(window, angular, undefined){
	'use strict';

	angular.module('todoApp').component('todoList', {
        bindings: {
			items: '<'
		},
		templateUrl: '/app/todo-list/todo-list.component.html',
		controller: 'todoListController',
		controllerAs: 'todoList'
    });

})(window, window.angular);