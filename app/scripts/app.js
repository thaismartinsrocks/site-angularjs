'use strict';

/**
 * @ngdoc overview
 * @name siteApp
 * @description
 * # siteApp
 *
 * Main module of the application.
 */
angular
  .module('thaisMartins', [
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/main', {
        redirectTo: function(){ return "/"; }
      })
      .when('/design', {
        templateUrl: 'views/design.html',
        controller: 'DesignCtrl'
      })
      .when('/sites', {
        templateUrl: 'views/sites.html',
        controller: 'SitesCtrl'
      })
      .when('/sistemas', {
        templateUrl: 'views/systems.html',
        controller: 'SystemsCtrl'
      })
      .when('/mobile', {
        templateUrl: 'views/mobile.html',
        controller: 'MobileCtrl'
      })
       .when('/projetos', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
