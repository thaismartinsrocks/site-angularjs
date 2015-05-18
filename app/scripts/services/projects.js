'use strict';

var app = angular.module('thaisMartins');
app.service('ProjectsService', function () {
	
	this._items = [
		 {
			  name:'Apperone',
			  image:'main.jpg',
			  images:['home.jpg', 'busca.jpg', 'lista.jpg', 'detalhes.jpg'],
			  skills:['DESIGN', 'HTML', 'CSS'],
			  shortDescription:'Este é um site feito em bla bla bla',
			  description:'',
			  link:'',
			  site:'',
		 },
		 {
			  name:'Viva Hostel',
			  image:'main.jpg',
			  images:['home.jpg', 'conteudo.jpg', 'fotos.jpg', 'tour.jpg'],
			  skills:['DESIGN', 'HTML', 'CSS'],
			  shortDescription:'Este é um site feito em bla bla bla',
			  description:'',
			  link:'',
			  site:'',
		 },
		 {
			  name:'Apperone',
			  image:'main.jpg',
			  images:['home.jpg', 'busca.jpg', 'lista.jpg', 'detalhes.jpg'],
			  skills:['DESIGN', 'HTML', 'CSS'],
			  shortDescription:'Este é um site feito em bla bla bla',
			  description:'',
			  link:'',
			  site:'',
		 },
		 {
			  name:'Viva Hostel',
			  image:'main.jpg',
			  images:['home.jpg', 'conteudo.jpg', 'fotos.jpg', 'tour.jpg'],
			  skills:['DESIGN', 'HTML', 'CSS'],
			  shortDescription:'Este é um site feito em bla bla bla',
			  description:'',
			  link:'',
			  site:'',
		 },
		 {
			  name:'Apperone',
			  image:'main.jpg',
			  images:['home.jpg', 'busca.jpg', 'lista.jpg', 'detalhes.jpg'],
			  skills:['DESIGN', 'HTML', 'CSS'],
			  shortDescription:'Este é um site feito em bla bla bla',
			  description:'',
			  link:'',
			  site:'',
		 },
		 {
			  name:'Viva Hostel',
			  image:'main.jpg',
			  images:['home.jpg', 'conteudo.jpg', 'fotos.jpg', 'tour.jpg'],
			  skills:['DESIGN', 'HTML', 'CSS'],
			  shortDescription:'Este é um site feito em bla bla bla',
			  description:'',
			  link:'',
			  site:'',
		 },
		 {
			  name:'Apperone',
			  image:'main.jpg',
			  images:['home.jpg', 'busca.jpg', 'lista.jpg', 'detalhes.jpg'],
			  skills:['DESIGN', 'HTML', 'CSS'],
			  shortDescription:'Este é um site feito em bla bla bla',
			  description:'',
			  link:'',
			  site:'',
		 },
		 {
			  name:'Viva Hostel',
			  image:'main.jpg',
			  images:['home.jpg', 'conteudo.jpg', 'fotos.jpg', 'tour.jpg'],
			  skills:['DESIGN', 'HTML', 'CSS'],
			  shortDescription:'Este é um site feito em bla bla bla',
			  description:'',
			  link:'',
			  site:'',
		 },
    ];
	
	this.getItems = function() {
		return this._items;
	}
	
});