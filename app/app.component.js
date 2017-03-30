(function(window, angular, undefined){
	'use strict';

	angular.module('todoApp').component('todoApp', {
		templateUrl: '/app/app.component.html',
		controller: 'todoAppController',
		controllerAs: 'main'
	});

})(window, window.angular);