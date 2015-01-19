'use strict';

/**
 *
 */
function TestCtrl(TestService) {
	var _this = this;

	_this.person = {
		age:  12,
		name: 'sika',
	}

	_this.doStuff = doStuff;

	return activate();

	/**
	 *
	 */
	function activate() {
		return TestService.getStuffASync().then(function(stuff) {
			_this.person = stuff;
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
