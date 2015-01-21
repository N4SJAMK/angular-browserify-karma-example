'use strict';

var expect  = require('chai').expect;
var angular = require('angular');

describe('directives/show-person', function() {
	var inject = angular.mock.inject;
	var module = angular.mock.module;

	var scope;
	var render;

	beforeEach(module('app'));

	beforeEach(inject(function($rootScope, $compile) {
		scope  = $rootScope.$new();
		render = function render() {
			var element = $compile(
				'<div show-person age="{{age}}" name="{{name}}" />'
			)(scope);
			$rootScope.$digest();
			return element;
		}
	}));

	it('should render the \'age\' and \'name\' properties', function() {
		scope.age  = 52;
		scope.name = 'sudo';

		var $element   = render();
		var $paragraph = $element.find('p');

		expect($paragraph.text()).to.equal('sudo / 52');
	});
});
