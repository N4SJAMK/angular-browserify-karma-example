'use strict';

var angular = require('angular');
              require('angular-ui-router');

angular.module('app', [ 'ui.router' ])
	.factory('TestService', require('./services/test'))
	.controller('TestCtrl', require('./controllers/test'))

	.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/main');

		$stateProvider
			.state('main', {
				'url':      '/main',
				'template': require('./partials/test.html'),
			});
	});
