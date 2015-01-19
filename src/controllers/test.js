'use strict';

/**
 *
 */
function TestCtrl(TestService) {
	var scope = this;

	scope.person = {
		'age':  12,
		'name': 'sika',
	}

	scope.doStuff = doStuff;

	return activate();

	/**
	 *
	 */
	function activate() {
		return TestService.getStuffASync().then(function(stuff) {
			scope.person = stuff;
		});
	}

	/**
	 *
	 */
	function doStuff(msg) {
		console.log(msg);
		console.log('TestCtrl::doStuff');
	}
}

module.exports = TestCtrl;
