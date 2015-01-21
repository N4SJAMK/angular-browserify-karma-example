'use strict';

var expect  = require('chai').expect;
var angular = require('angular');

describe('directives/edit-person', function() {

	var inject  = angular.mock.inject;
	var module  = angular.mock.module;

	var scope;
	var render;

	beforeEach(module('app'));

	beforeEach(inject(function($rootScope, $compile) {
		scope  = $rootScope.$new();
		render = function render() {
			var element = $compile(
				'<div edit-person person="person" />'
			)(scope);
			$rootScope.$digest();
			return element;
		}
	}));

	it('should render correct input types and values', function() {
		scope.person = { name: 'sudo', age: 52 }

		var $element   = render();
		var $ageInput  = angular.element($element.find('input')[0]);
		var $nameInput = angular.element($element.find('input')[1]);

		expect($ageInput.prop('type')).to.equal('number');
		expect($nameInput.prop('type')).to.equal('text');

		expect($ageInput.val()).to.equal('52');
		expect($nameInput.val()).to.equal('sudo');
	});

	it('should change the \'age\' property', function() {
		scope.person = { name: 'sudo', age: 52 }

		var $element  = render();
		var $ageInput = angular.element($element.find('input')[0]);

		$ageInput.val('99').triggerHandler('change');

		expect(scope.person.age).to.equal(99);
	});

	it('should change the \'name\' property', function() {
		scope.person = { name: 'sudo', age: 52 }

		var $element  = render();
		var $nameInput = angular.element($element.find('input')[1]);

		$nameInput.val('masi').triggerHandler('change');

		expect(scope.person.name).to.equal('masi');
	});
});
