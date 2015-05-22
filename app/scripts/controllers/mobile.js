'use strict';

/**
 * @ngdoc function
 * @name thaisMartins.controller:MobileCtrl
 * @description
 * # MobileCtrl
 * Controller of the thaisMartins
 */
var app = angular.module('thaisMartins');
app.controller('MobileCtrl', function ($scope, MenuService) {
	  
	$scope.menu = MenuService.getItems();
    
	$scope.skills = [
  	  {name:'Phonegap', icon:'mobile-phone'},
  	  {name:'Ionic', icon:'circle-o'},
  	  {name:'ngCordova', icon:'cube'},
  	  {name:'Multiplataforma', icon:'inbox'},
  	];
});
