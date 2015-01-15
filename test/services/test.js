'use strict';

var expect = chai.expect;


describe('TestService', function() {

	var $timeout;
	var $rootScope;
	var TestService;

	beforeEach(module('app'));

	// Since we are using '$timeout' in our service and 'angular-mocks'
	// actually mocks it, we need to 'flush' the timeouts manually.
	beforeEach(inject(function(_$timeout_, _TestService_) {
		$timeout    = _$timeout_;
		TestService = _TestService_;
	}));

	describe('#getStuffASync', function() {

		it('should exist', function() {
			expect(TestService).to.respondTo('getStuffASync');
		});

		it('should return a promise interface', function() {
			expect(TestService.getStuffASync()).to.respondTo('then');
		});

		it('should resolve to an object', function(done) {
			TestService.getStuffASync().then(function(data) {
				return expect(data).to.be.an('object') && done();
			});
			$timeout.flush();
		});
	});

	describe('#getStuffASyncNoPromise', function() {
		it('should exist', function() {
			expect(TestService).to.respondTo('getStuffASyncNoPromise');
		});

		it('should respond to a callback', function(done) {
			TestService.getStuffASyncNoPromise(function(data) {
				return expect(data).to.be.an('object') && done();
			});
			$timeout.flush();
		});
	});
});
