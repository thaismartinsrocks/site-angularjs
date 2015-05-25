'use strict';

var app = angular.module('thaisMartins');
app.service('skillsService', function () {
	
	this._items = {
	      'design':[
	          {name:'Wireframe', icon:'sitemap'},
			  {name:'UI / UX', icon:'users'},
			  {name:'Photoshop', icon:'desktop'},
			  {name:'Illustrator', icon:'file-image-o'},
	     ],
	     'sites':[
			{name:'HTML5', icon:'html5'},
			{name:'CSS3', icon:'css3'},
			{name:'Responsivo', icon:'mobile-phone'},
			{name:'Bootstrap', icon:'bold'},
			{name:'Javascript', icon:'code'},
			{name:'Jquery', icon:'code'},
			{name:'AngularJs', icon:'buysellads'},
			{name:'Sass', icon:'terminal'},
   	     ],
	   	 'systems':[
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
      	  ],
      	  'mobile':[
			{name:'Phonegap', icon:'mobile-phone'},
			{name:'Ionic', icon:'circle-o'},
			{name:'ngCordova', icon:'cube'},
			{name:'Multiplataforma', icon:'inbox'},
      	  ],
};
	
	this.getItems = function() {
		return this._items;
	};
	
});