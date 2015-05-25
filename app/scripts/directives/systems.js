'use strict';

var app = angular.module('thaisMartins');
app.directive('systems', function() {
	 return {
	 	templateUrl: 'views/systems.html',
	 	restrict : 'E'
	 };
});