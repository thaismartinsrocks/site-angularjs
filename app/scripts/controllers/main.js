'use strict';

/**
 * @ngdoc function
 * @name thaisMartins.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the thaisMartins
 */
var app = angular.module('thaisMartins');
app.controller('MainCtrl', function ($scope) {
	  
    $scope.menu = [
      'Inicio',
      'Design',
      'Sites',
      'Sistemas',
      'Mobile'
    ];
});
