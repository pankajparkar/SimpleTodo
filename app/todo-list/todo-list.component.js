(function(window, angular, undefined){
	'use strict';

	angular.module('todoApp').component('todoList', {
        bindings: {
			items: '<'
		},
		controller: 'todoListController',
		controllerAs: 'todoList'
    });

})(window, window.angular);