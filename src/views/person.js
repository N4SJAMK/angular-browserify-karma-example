'use strict';

/**
 *
 */
function PersonView(PersonService) {
	var _this = this;

	_this.person = {
		age:  12,
		name: 'sika',
	}

	return activate();

	/**
	 *
	 */
	function activate() {
		return PersonService.getPersonASync().then(function(person) {
			_this.person = person;
		});
	}
}

module.exports = PersonView;
