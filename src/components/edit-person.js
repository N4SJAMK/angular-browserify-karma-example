'use strict';

/**
 *
 */
module.exports = function EditPerson() {
	return {
		scope: {
			person: '=',
		},

		controller:       EditPersonCtrl,
		controllerAs:     'ctrl',
		bindToController: true,

		restrict:   'A',
		template:   require('./edit-person.template.html'),
	}
}

/**
 *
 */
function EditPersonCtrl() {

}
