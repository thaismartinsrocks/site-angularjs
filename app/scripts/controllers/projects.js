'use strict';

/**
 * @ngdoc function
 * @name thaisMartins.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the thaisMartins
 */
var app = angular.module('thaisMartins');
app.controller('ProjectsCtrl', function ($scope, MenuService, ProjectsService) {
	  
	$scope.menu = MenuService.getItems();
	
	$scope.projects = ProjectsService.getItems();
	
	$scope.baseUrl = '/images/projects/';
});
