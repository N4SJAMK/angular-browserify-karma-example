'use strict';

var expect  = require('chai').expect;
var angular = require('angular');

describe('services/person', function() {
	var inject = angular.mock.inject;
	var module = angular.mock.module;

	var $timeout;
	var PersonService;

	beforeEach(module('app'));

	// Since we are using '$timeout' in our service and 'angular-mocks'
	// actually mocks it, we need to 'flush' the timeouts manually.
	beforeEach(inject(function(_$timeout_, _PersonService_) {
		$timeout      = _$timeout_;
		PersonService = _PersonService_;
	}));

	describe('#getPersonASync', function() {
		it('should exist', function() {
			expect(PersonService).to.respondTo('getPersonASync');
		});

		it('should return a promise interface', function() {
			expect(PersonService.getPersonASync()).to.respondTo('then');
		});

		it('should resolve to an object', function(done) {
			PersonService.getPersonASync().then(function(person) {
				expect(person).to.be.an('object');
				expect(person).to.have.property('age');
				expect(person).to.have.property('name');
				return done();
			});
			$timeout.flush();
		});
	});
});
