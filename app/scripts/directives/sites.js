'use strict';

var app = angular.module('thaisMartins');
app.directive('sites', function() {
	 return {
	 	templateUrl: 'views/sites.html',
	 	restrict : 'E'
	 };
});