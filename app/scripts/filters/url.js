'use strict';

var app = angular.module('thaisMartins');
app.filter('url', function() {

  return function(input) {
    
	if(input == null){
		return null;
	}
	
	var output = input;
    output = output.replace(' ', '');
    return output.toLowerCase();
    
  }
  
});