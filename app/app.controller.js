(function(window, angular, undefined){
	'use strict';

	angular.module('todoApp').controller('todoAppController', [function(){
		var main = this, count = 0;
		main.todos = [
			{id: ++count, description: 'Wake Up', completed: false},
			{id: ++count, description: 'Gym', completed: false},
			{id: ++count, description: 'Office', completed: false}
		];
		main.addTodo = addTodo;

		function addTodo(){
			main.todos.push({
				id: ++count,
				description: main.latestTodo,
				completed: false
			});
			main.latestTodo = '';
		};
	}]);

})(window, window.angular);