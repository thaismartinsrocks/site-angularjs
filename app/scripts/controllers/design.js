'use strict';

/**
 * @ngdoc function
 * @name thaisMartins.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the thaisMartins
 */
angular.module('thaisMartins')
  .controller('DesignCtrl', function ($scope) {
	  
    $scope.menu = [
      'Inicio',
      'Design',
      'Sites',
      'Sistemas',
      'Mobile'
    ];
    
  });
