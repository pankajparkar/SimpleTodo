(function(window, angular, undefined){
	'use strict';

	angular.module('todoApp').controller('todoAppController', todoAppController);

	todoAppController.$inject = ['todoService'];
	function todoAppController(todoService){
		var main = this;
		main.addTodo = addTodo;

		function addTodo(){
			todoService.addTodo(main.latestTodo);
			main.latestTodo = '';
		}

		//init
		function $onInit(){
			main.latestTodo = '';
		}
	}

})(window, window.angular);