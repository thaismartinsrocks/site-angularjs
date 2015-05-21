'use strict';

/**
 * @ngdoc function
 * @name thaisMartins.controller:SystemsCtrl
 * @description
 * # SystemsCtrl
 * Controller of the thaisMartins
 */
var app = angular.module('thaisMartins');
app.controller('SystemsCtrl', function ($scope, MenuService) {
	  
	$scope.menu = MenuService.getItems();
    
	$scope.skills = [
   	  {name:'HTML5', image:''},
   	  {name:'CSS3', image:''},
   	  {name:'Bootstrap', image:''},
   	  {name:'Javascript', image:''},
   	  {name:'AngularJs', image:''},
   	  {name:'Cross-Browser', image:''},
   	];
});