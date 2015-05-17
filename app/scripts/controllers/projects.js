'use strict';

/**
 * @ngdoc function
 * @name thaisMartins.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the thaisMartins
 */
var app = angular.module('thaisMartins');
app.controller('ProjectsCtrl', function ($scope, MenuService) {
	  
	$scope.menu = MenuService.getItems();
	
	$scope.projects = [
	  {
		  name:'Apperone',
		  image:'',
		  skills:['DESIGN', 'HTML', 'CSS'],
		  shortDescription:'Este é um site feito em bla bla bla',
		  description:'',
		  link:'',
		  site:'',
	  },
	  {
		  name:'Viva Hostel',
		  image:'',
		  skills:['DESIGN', 'HTML', 'CSS'],
		  shortDescription:'Este é um site feito em bla bla bla',
		  description:'',
		  link:'',
		  site:'',
	  },
	];
});
