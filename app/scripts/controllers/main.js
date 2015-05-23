'use strict';

/**
 * @ngdoc function
 * @name thaisMartins.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the thaisMartins
 */
var app = angular.module('thaisMartins');
app.controller('MainCtrl', function ($scope, $timeout, $http, MenuService) {
	
	$scope.showFirst = true;
	$scope.showSecond = true;
	$scope.showThird = true;
	$scope.showFourth = true;
	$scope.showFifth = true;
	$scope.showSixth = true;
	$scope.form = [];
	
	$scope.menu = MenuService.getItems();
	
	$scope.networks = [
	    { name:'Linkedin', icon:'linkedin-square', link:'#' },
	    { name:'Github', icon:'github-alt', link:'#' },
	];
	
	$scope.sendMail = function() {
		
		console.log($scope.form);
		var params = $.param({
						name: $scope.form.name,
						mail: $scope.form.mail,
						message: $scope.form.message,
						phone: $scope.form.phone
					 });
		
		console.log(params);
		
		$http.post('http://localhost/mail.php', params, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
		).
		success(function(data){
	         console.log(data);
	         if (data.success) { //success comes from the return json object
	             $scope.submitButtonDisabled = true;
	             $scope.resultMessage = data.message;
	             $scope.result='bg-success';
	         } else {
	             $scope.submitButtonDisabled = false;
	             $scope.resultMessage = data.message;
	             $scope.result='bg-danger';
	         }
	     }).
	     error(function(data, status, headers, config) {
	    	console.log(data);
	    });
	};

	$timeout(function() {
		$scope.shakeButton = true;
	}, 3000);
	
});
