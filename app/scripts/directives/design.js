'use strict';

var app = angular.module('thaisMartins');
app.directive('design', function() {
	 return {
	 	templateUrl: 'views/design.html',
	 	restrict : 'E'
	 };
});