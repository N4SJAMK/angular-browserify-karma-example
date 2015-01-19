'use strict';

var expect = chai.expect;

describe('TestDirective', function() {
	var scope;
	var render;
	var element;

	beforeEach(module('app'));

	beforeEach(inject(function($rootScope, $compile) {
		scope = $rootScope.$new();

		var compile = $compile(
			'<test heading="{{heading}}" person="person" ' +
			      'do-stuff="doStuff()" />'
		);

		render = function render() {
			element = compile(scope);
			$rootScope.$digest();
		}
	}));

	it('should render the \'heading\' property', function() {
		scope.heading = 'testing';
		render();
		expect(element.find('h1').text()).to.equal('testing');
	});

	it('should render the \'person\' property', function() {
		scope.person = { name: 'test', age: 42 }
		render();
		expect(element.find('p').text()).to.equal('test / 42');
	});

	it('should attach the \'do-stuff\' handler', function(done) {
		scope.doStuff = done;
		render();
		element.find('button').triggerHandler('click');
	});
});
