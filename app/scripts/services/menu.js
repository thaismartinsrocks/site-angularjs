'use strict';

var app = angular.module('thaisMartins');
app.service('MenuService', function () {
	
	this._items = [
       { name:'Início', link:'main' },
       { name:'Design', link:'design' },
       { name:'Sites', link:'sites' },
       { name:'Sistemas', link:'sistemas' },
       { name:'Mobile', link:'mobile' },
       { name:'Projetos', link:'projetos' }
    ];
	
	this.getItems = function() {
		return this._items;
	}
	
});