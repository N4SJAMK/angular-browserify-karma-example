'use strict';

/**
 *
 */
module.exports = function Test() {
	return {
		scope: {
			person:  '=',
			heading: '@',
			doStuff: '&',
		},

		controller:       TestCtrl,
		controllerAs:     'test',
		bindToController: true,

		restrict:   'E',
		template:   require('./test.template.html'),
	}
}

/**
 *
 */
function TestCtrl() {

}
