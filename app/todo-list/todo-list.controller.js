(function(window, angular, undefined){
	'use strict';

	angular.module('todoApp').controller('todoListController', todoListController);

	todoListController.$inject = [];
	function todoListController() {
        var todoList = this;
		todoList.add = add;
		todoList.save = save;
		todoList.edit = edit;
		todoList.remove = remove;

		function add(){
			//TODO
		};
		function save(){
			//TODO
		}
		function edit(){
			//TODO
		}
		function remove(){
			//TODO
		}
    }

})(window, window.angular);