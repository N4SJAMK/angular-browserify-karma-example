'use strict';

/**
 *
 */
module.exports = function ShowPerson() {
	return {
		scope: {
			age:  '@',
			name: '@',
		},

		controller:       ShowPersonCtrl,
		controllerAs:     'ctrl',
		bindToController: true,

		restrict:   'A',
		template:   require('./show-person.template.html'),
	}
}

/**
 *
 */
function ShowPersonCtrl() {

}
