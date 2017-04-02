(function(window, angular, undefined){
	'use strict';

	angular.module('todoApp').controller('todoItemController', todoItemController);

    todoItemController.$inject = [];
    function todoItemController() {
        var todoItem = this;
        todoItem.toggleCompleted = toggleCompleted;

        function toggleCompleted() {
            todoItem.item.completed = !todoItem.item.completed
        };
    }

})(window, window.angular);