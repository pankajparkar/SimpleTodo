(function(window, angular, undefined){
	'use strict';

	angular.module('todoApp').controller('todoAppController', todoAppController);

	todoAppController.$inject = ['todoService'];
	function todoAppController(todoService){
		var main = this;
		main.addTodo = addTodo;
		main.clearCompleted = clearCompleted;

		function getTodoList(){
			main.todos = todoService.getTodoList();
		}

		function addTodo(){
			todoService.addTodo(main.latestTodo);
			main.latestTodo = '';
			getTodoList();
		}

		function clearCompleted(){
			getTodoList();
		}

		function activate(){
			getTodoList();
			main.tabs = todoService.getTabs();
		}

		//init
		activate();
	}

})(window, window.angular);