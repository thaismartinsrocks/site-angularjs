'use strict';

/**
 * @ngdoc function
 * @name thaisMartins.controller:SitesCtrl
 * @description
 * # SitesCtrl
 * Controller of the thaisMartins
 */
var app = angular.module('thaisMartins');
app.controller('SitesCtrl', function ($scope, MenuService) {
	  
	$scope.menu = MenuService.getItems();
	
	$scope.skills = [
	  {name:'HTML5', icon:'html5'},
	  {name:'CSS3', icon:'css3'},
	  {name:'Bootstrap', icon:'bold'},
	  {name:'Javascript', icon:'code'},
	  {name:'AngularJs', icon:'buysellads'},
	  {name:'Cross Browser', icon:'desktop'},
	];
});
