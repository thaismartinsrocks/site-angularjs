'use strict';

var app = angular.module('thaisMartins');
app.directive('logo', function () {
	 return {
	 	templateUrl: 'logo.html',
	 	restrict : 'E'
	 };
});