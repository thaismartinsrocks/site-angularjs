'use strict';

var app = angular.module('thaisMartins');
app.service('menuService', function () {
	
	this._items = [
       { name:'Início', link:'main' },
       { name:'Design', link:'design' },
       { name:'Sites', link:'sites' },
       { name:'Sistemas', link:'systems' },
       { name:'Mobile', link:'mobile' },
       { name:'Projetos', link:'projects' }
    ];
	
	this.getItems = function() {
		return this._items;
	};
	
});