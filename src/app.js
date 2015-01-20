'use strict';

var angular = require('angular');
              require('angular-ui-router');

angular.module('app', ['ui.router'])

	.factory('PersonService', require('./services/person'))

	.controller('PersonView', require('./views/person'))

	.directive('showPerson', require('./components/show-person'))
	.directive('editPerson', require('./components/edit-person'))

	.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/person');

		$stateProvider
			.state('person', {
				url:      '/person',
				template: require('./views/person.template.html'),
			});
	});
