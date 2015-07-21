'use strict';

/**
 * @ngdoc service
 * @name quoteSiteApp.quoteSiteConfig
 * @description
 * # quoteSiteConfig
 * Constant in the quoteSiteApp.
 */
angular.module('quoteSiteApp')
    .constant('quoteSiteConfig', {
        APP_VERSION_CODE: 0.1,
        APP_VERSION_NAME: 'ZeroDotOne',

        API_URL: 'http://toaster.vdeute.com:8000/'
    });
