(function(window, angular, undefined){
	'use strict';

	angular.module('todoApp').service('todoService', todoService);

    todoService.$inject = [];
    function todoService() {
        var self = this, count = 0,
            todos = [
                {id: ++count, description: 'Wake Up', completed: false},
                {id: ++count, description: 'Gym', completed: false},
                {id: ++count, description: 'Office', completed: false}
            ], 
            tabs = [
                {id: 1, name: 'all', description: 'All'},
                {id: 1, name: 'todo', description: 'Todo'},
                {id: 1, name: 'completed', description: 'Completed'},
            ];
        self.getTodoList = getTodoList;
        self.addTodo = addTodo;
        self.removeTodos = removeTodos;
        self.getTabs = getTabs;
        
        function getTodoList(){
            return todos;
        }

        function getTabs(){
            return tabs;
        }

        function addTodo(description){
            todos.push({
				id: ++count,
				description: description,
				completed: false
			});
        }

        function removeTodos(){
            todos = todos.filter(function (todo) {
                return !todo.completed;
            });
        }
	}

})(window, window.angular);