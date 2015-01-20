'use strict';

var expect = chai.expect;

describe('directives/show-person', function() {

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
