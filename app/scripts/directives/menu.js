'use strict';

var app = angular.module('thaisMartins');
app.directive('menu', function () {
	 return {
	 	templateUrl: "menu.html",
	 	restrict : "E"
	 };
});