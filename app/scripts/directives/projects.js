'use strict';

var app = angular.module('thaisMartins');
app.directive('projects', function() {
	 return {
	 	templateUrl: 'views/projects.html',
	 	restrict : 'E'
	 };
});