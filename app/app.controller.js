(function(window, angular, undefined){
	'use strict';

	angular.module('todoApp').controller('todoAppController', [function(){
		var main = this;
		main.todos = [
			{id: 1, description: 'Wake Up', completed: false},
			{id: 2, description: 'Gym', completed: false},
			{id: 3, description: 'Office', completed: false}
		];
	}]);

})(window, window.angular);