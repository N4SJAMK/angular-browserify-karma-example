'use strict';

/**
 *
 */
function TestCtrl(TestService) {
	var scope = this;

	scope.stuff = {
		'greeting': '...',
	}

	return activate();

	/**
	 *
	 */
	function activate() {
		return TestService.getStuffASync().then(function(stuff) {
			scope.stuff = stuff;
		});
	}
}

module.exports = TestCtrl;
