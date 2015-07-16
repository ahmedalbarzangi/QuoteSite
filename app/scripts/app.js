'use strict';

/**
 * @ngdoc overview
 * @name quoteSiteApp
 * @description
 * # quoteSiteApp
 *
 * Main module of the application.
 */
angular
  .module('quoteSiteApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
