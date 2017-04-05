(function(window, angular, undefined){
	'use strict';

	angular.module('todoApp').controller('todoListController', todoListController);

	todoListController.$inject = ['todoService'];

	function todoListController(todoService) {
        var todoList = this;
		todoList.$onInit = $onInit;
		todoList.$doCheck = $doCheck;
		todoList.filterTodoList = filterTodoList;
		todoList.clearCompleted = clearCompleted;
		todoList.toggleCompleted = toggleCompleted;
		todoList.removeTodo = todoService.removeTodo;

		function $doCheck(model){
			//Todo this should be somewhere else to make application more performant
			todoList.todosCompleted = todoService.getTodoList().filter(function(item){
				return item.completed;
			}).length;
		}

        function toggleCompleted(item) {
            item.completed = !item.completed
        }
		
		function $onInit(){
			todoList.tabs = todoService.getTabs();
			todoList.selectedTab = todoList.tabs[0];
			filterTodoList();
		}
		
		function getTodoList(){
			todoList.todos = todoService.getTodoList();
		}
		
		function filterTodoList(){
			getTodoList();
			if(todoList.selectedTab.name === 'all') return;
			todoList.todos = todoList.todos.filter(function(item){
				return item.completed === (todoList.selectedTab.name === "completed");
			});
		}

		function clearCompleted(){
			todoService.removeTodos();
			filterTodoList();
			alert('Completed todos has been removed.');
		}
    }

})(window, window.angular);