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
        self.removeTodo = removeTodo;
        
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

        function removeTodo(item){
            var id = item.id, index = -1;
            todos.forEach(function(todo, i){
                if(todo.id=== id) index =i;
            });
            if(index !== -1) todos.splice(index, 1);
            alert('Todo '+ item.description + ' got deleted.');
        }
	}
})(window, window.angular);