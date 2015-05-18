'use strict';

/**
 * @ngdoc function
 * @name thaisMartins.controller:DesignCtrl
 * @description
 * # DesignCtrl
 * Controller of the thaisMartins
 */
var app = angular.module('thaisMartins');
app.controller('DesignCtrl', function ($scope, MenuService) {
	  
	$scope.menu = MenuService.getItems();
	
	$scope.skills = [
   	  {name:'Ps', icon:'desktop'},
   	  {name:'Ai', icon:'file-image-o'},
   	];
    
 });
