'use strict';

var app = angular.module('thaisMartins');
app.service('projectsService', function () {
	
	this._items = [
		 {
			  name:'Apperone',
			  image:'main.jpg',
			  images:['home.jpg', 'busca.jpg', 'lista.jpg', 'detalhes.jpg'],
			  skills:['DESIGN', 'HTML', 'CSS'],
			  shortDescription:'Desenvolvimento do layout para o app de pizzarias',
			  description:'',
			  site:null,
		 }, {
			  name:'Viva Hostel',
			  image:'main.jpg',
			  images:['home.jpg', 'conteudo.jpg', 'fotos.jpg', 'tour.jpg'],
			  skills:['DESIGN', 'HTML', 'CSS'],
			  shortDescription:'Criação do logo, layout e site instituicional',
			  description:'',
			  site:'http://www.vivahostel.com.br/',
		 },
    ];
	
	this.getItems = function() {
		return this._items;
	};
	
});