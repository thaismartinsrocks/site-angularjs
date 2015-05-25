'use strict';

var app = angular.module('thaisMartins');
app.directive('contact', function() {
	 return {
	 	templateUrl: 'views/contact.html',
	 	restrict : 'E'
	 };
});