'use strict';

/**
 * @ngdoc filter
 * @name quoteSiteApp.filter:quoteFilter
 * @function
 * @description
 * # quoteFilter
 * Filter in the quoteSiteApp.
 */
angular.module('quoteSiteApp')
    .filter('quoteFilter', function () {
        return function (quotes, searchQuery) {
            var filteredQuotes = [];

            if (searchQuery != null) {
                angular.forEach(quotes, function (quote, index) {
                    if (quote.user_name.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1 ||
                            quote.text.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1) {
                        filteredQuotes.push(quote);
                    }
                });
                return filteredQuotes;
            } else {
                return quotes;
            }
        };
    });
