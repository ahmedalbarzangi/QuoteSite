'use strict';

/**
 * @ngdoc service
 * @name quoteSiteApp.apiService
 * @description
 * # apiService
 * Service in the quoteSiteApp.
 */
angular.module('quoteSiteApp')
    .service('apiService', function ($http, quoteSiteConfig) {

        this.getQuotes = function () {
            return $http({
                method: 'GET',
                cache: true,
                url: quoteSiteConfig.API_URL + 'quotes'
                //url: 'json/getQuotes.json'
            });
        };

        this.getQuote = function (query) {
            return $http({
                method: 'GET',
                cache: true,
                url: quoteSiteConfig.API_URL + 'quotes?q' + query
                //url: 'json/getQuotes.json'
            });
        };
    });
