'use strict';

var app = angular.module('thaisMartins');
app.directive('modal', function () {
	 return {
	 	templateUrl: 'modal.html',
	 	restrict : 'E',
	 	replace: true,
        transclude: true,
        scope: {
        	item: '=item',
        	show: '=show',
        	url: '=url'
        },
        controller: function($scope, $element, $attrs, $location) {
        	$scope.closeModal = function() {
        		$scope.showModal = false;
        		$scope.show = false;
        		console.log($scope.showModal);
        	}
        }
	 };
});