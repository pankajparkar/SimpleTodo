(function(window, angular, undefined){
	'use strict';
	//Smart component
	angular.module('todoApp').component('todoList', {
		templateUrl: '/app/todo-list/todo-list.component.html',
		controller: 'todoListController',
		controllerAs: 'todoList'
    });

})(window, window.angular);