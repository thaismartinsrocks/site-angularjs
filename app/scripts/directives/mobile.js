'use strict';

var app = angular.module('thaisMartins');
app.directive('mobile', function() {
	 return {
	 	templateUrl: 'views/mobile.html',
	 	restrict : 'E'
	 };
});