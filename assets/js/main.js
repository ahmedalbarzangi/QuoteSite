/*
	Strongly Typed by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

var api_url = "";

var app = angular.module('ITLounge', []);

app.controller('laadQuotes', ['$scope', 'zoeken', function($scope, someService){

	$http({
		method: 'GET',
		url: 'test.php'
	}).success(function(data, status) {

		//console.log(data);
		$scope.quotes = angular.fromJson(data);
		//console.log($scope.quotes);
	}).error(function(data, status) {
		// Some error occurred
	});

	$scope.formatDate = function(date){

		var date = new Date(date * 1000);
		//var dateObject = date.getFullYear() +'/'+ ('0' + (date.getMonth() + 1)).slice(-2) +'/'+ ('0' + date.getDate()).slice(-2);
		return date;
		//var date = date.split("-").join("/");
		//var dateOut = new Date(date);
		//return dateOut;
	};

	var callback = function(){
		$scope.$apply()
	}

	$scope.search = function(){
		someService.search($scope.keywords).then(function(response){
			//$scope.response = response.data;
			$scope.quotes = angular.fromJson(response.data);
			laadQuotes();
		});
	};

}]);

//app.controller('searchController', ['$scope', 'zoeken', function($scope, someService){
//
//
//}]);

app.service('zoeken', ['$http', function($http){
	return {
		search: function(keywords){
			return $http.post('/test.php', { "zoekwoord" : keywords });
		}
	}
}]);


(function($) {

	skel
		.breakpoints({
			desktop: '(min-width: 737px)',
			tablet: '(min-width: 737px) and (max-width: 1200px)',
			mobile: '(max-width: 736px)'
		})
		.viewport({
			breakpoints: {
				tablet: {
					width: 1080
				}
			}
		});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});

		// CSS polyfills (IE<9).
			if (skel.vars.IEVersion < 9)
				$(':last-child').addClass('last-child');

		// Dropdowns.
			$('#nav > ul').dropotron({
				mode: 'fade',
				noOpenerFade: true,
				hoverDelay: 150,
				hideDelay: 350
			});

		// Off-Canvas Navigation.

			// Title Bar.
				$(
					'<div id="titleBar">' +
						'<a href="#navPanel" class="toggle"></a>' +
					'</div>'
				)
					.appendTo($body);

			// Navigation Panel.
				$(
					'<div id="navPanel">' +
						'<nav>' +
							$('#nav').navList() +
						'</nav>' +
					'</div>'
				)
					.appendTo($body)
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left',
						target: $body,
						visibleClass: 'navPanel-visible'
					});

			// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#titleBar, #navPanel, #page-wrapper')
						.css('transition', 'none');

	});

})(jQuery);
