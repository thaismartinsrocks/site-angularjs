'use strict';

var app = angular.module('thaisMartins');
app.directive('home', function() {
	 return {
	 	templateUrl: 'views/home.html',
	 	restrict : 'E'
	 };
});