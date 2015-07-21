'use strict';

/**
 * @ngdoc function
 * @name quoteSiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the quoteSiteApp
 */
angular.module('quoteSiteApp')
    .controller('MainCtrl', function ($scope, apiService) {

        $scope.main = {
            quotes: []
        };

        apiService.getQuotes().success(function (data) {
            console.log(data);
            $scope.main.quotes = data.data;
        }).error(function () {
            console.log('error');
        });
    });
