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
   	  {name:'PHP', icon:'code'},
   	  {name:'Yii', icon:'cubes'},
   	  {name:'Codeigniter', icon:'cubes'},
   	  {name:'Doctrine', icon:'cogs'},
   	  {name:'Ngnix/PHP-FPM', icon:'hdd-o'},
   	  {name:'Java', icon:'code'},
   	  {name:'Hibernate', icon:'cogs'},
   	  {name:'Spring', icon:'cubes'},
   	  {name:'Jboss', icon:'hdd-o'},
   	  {name:'Tomcat', icon:'hdd-o'},
   	  {name:'git', icon:'git'},
 	  {name:'MySql', icon:'database'},
   	];
});