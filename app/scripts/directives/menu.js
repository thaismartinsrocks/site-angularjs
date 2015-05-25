'use strict';

var app = angular.module('thaisMartins');
app.directive('menu', function () {
	 return {
	 	templateUrl: 'components/menu.html',
	 	restrict : 'E',
	 	controller: function($scope, $element, $attrs, $location) {
        	$scope.toogleMenu = function() {
        		$scope.showMenu = true;
        	}
        }
	 };
});