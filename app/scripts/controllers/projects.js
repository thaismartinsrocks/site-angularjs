'use strict';

/**
 * @ngdoc function
 * @name thaisMartins.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the thaisMartins
 */
var app = angular.module('thaisMartins');
app.controller('ProjectsCtrl', function ($scope, $filter, MenuService, ProjectsService) {
	  
	$scope.menu = MenuService.getItems();
	$scope.projects = ProjectsService.getItems();
	
	$scope.baseUrl = 'images/projects/';
	$scope.showModal = false;
	
    $scope.showDetails = function(item){
    	
    	if(item === null) {
    		return;
    	}
    	
    	$scope.showModal = true;
        $scope.modalItem = item;
        console.log($scope.modalItem);
    };
    
});
