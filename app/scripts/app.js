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
        'ngRoute',
        'ngMaterial'
    ])

    // Material Design theme config.
    .config(function ($mdThemingProvider) {
        // Default theme.
        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('light-blue');

        $mdThemingProvider.setDefaultTheme('default');
    })

    // Route provider config.
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
