'use strict';

/**
 * @ngdoc function
 * @name thaisMartins.controller:MobileCtrl
 * @description
 * # MobileCtrl
 * Controller of the thaisMartins
 */
var app = angular.module('thaisMartins');
app.controller('MobileCtrl', function ($scope, $interval, MenuService) {
	  
	$scope.menu = MenuService.getItems();
    
	$scope.skills = [
  	  {name:'Phonegap', icon:'mobile-phone'},
  	  {name:'Ionic', icon:'circle-o'},
  	  {name:'ngCordova', icon:'cube'},
  	  {name:'Multiplataforma', icon:'inbox'},
  	];
	
	var count = 1;
	$scope.classes = ['green', 'red', 'blue'];
	$scope.classPage = $scope.classes[count];
	
	$interval(function() {

		$scope.classPage = $scope.classes[count];
		count += 1;
		
		if(count > 2){
			count = 0;
		}
		
	}, 2000);

});
