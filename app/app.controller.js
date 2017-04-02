(function(window, angular, undefined){
	'use strict';

	angular.module('todoApp').controller('todoAppController', todoAppController);

	todoAppController.$inject = ['todoService'];
	function todoAppController(todoService){
		var main = this;
		main.addTodo = addTodo;
		main.filterTodoList = filterTodoList;
		main.clearCompleted = clearCompleted;

		function getTodoList(){
			main.todos = todoService.getTodoList();
		}

		function addTodo(){
			todoService.addTodo(main.latestTodo);
			main.latestTodo = '';
			getTodoList();
		}

		function filterTodoList(){
			getTodoList();
			if(main.selectedTab.name === 'all') return;
			main.todos = main.todos.filter(function(item){
				return item.completed === (main.selectedTab.name === "completed");
			});
		}

		function clearCompleted(){
			todoService.removeTodos();
			getTodoList();
		}

		function activate(){
			getTodoList();
			main.tabs = todoService.getTabs();
			main.selectedTab = main.tabs[0];
			filterTodoList();
		}

		//init
		activate();
	}

})(window, window.angular);