'use strict';

/**
 * @ngdoc function
 * @name thaisMartins.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the thaisMartins
 */
var app = angular.module('thaisMartins');
app.controller('AboutCtrl', function ($scope) {
	  
	$scope.menu = [
       { name:'Início', link:'' },
       { name:'Sobre Mim', link:'sobre-mim' },
       { name:'Design', link:'design' },
       { name:'Sites', link:'sites' },
       { name:'Sistemas', link:'sistemas' },
       { name:'Mobile', link:'mobile' },
       { name:'Trabalhos', link:'trabalhos' }
    ];
	
	$scope.skills = [
        { id:'xsmall', name:'Doctrine ORM' },
		{ id:'small', name:'CodeIgniter' },
		{ id:'xbig', name:'PHP' },
		{ id:'xsmall', name:'Yii Framework' },
		{ id:'small', name:'CakePHP' },
		{ id:'medium', name:'Spring' },
		{ id:'xbig', name:'Java' },
		{ id:'big', name:'Hibernate' },
		{ id:'medium', name:'Apache' },
		{ id:'xsmall', name:'Ngnix' },
		{ id:'medium', name:'PHP-FPM' },
		{ id:'medium', name:'JBoss' },
		{ id:'xsmall', name:'TomCat' },
		{ id:'small', name:'Jenkins' },
		{ id:'xsmall', name:'Restfull' },
		{ id:'medium', name:'MySQL' },
		{ id:'big', name:'Redis' },
		{ id:'xsmall', name:'Linux' },
		{ id:'big', name:'AWS' },
		{ id:'small', name:'Eclipse' },
		{ id:'medium', name:'Git' },
		{ id:'xsmall', name:'SVN' },
		{ id:'big', name:'Orientação a Objetos' },
		{ id:'medium', name:'Padrões de Projetos' },
		{ id:'small', name:'TDD' },
		{ id:'big', name:'Engenharia de Requisitos' },
		{ id:'xsmall', name:'Scrum' },
		{ id:'medium', name:'Kanban' },
		{ id:'small', name:'Lean' }
    ];
	
});
