'use strict';

/**
 *
 */
function TestService($q, $timeout) {

	return {
		getStuffASync:          getStuffASync,
		getStuffASyncNoPromise: getStuffASyncNoPromise,
	}

	/**
	 *
	 */
	function getStuffASync() {
		return $q(function(resolve, reject) {
			$timeout(function() {
				return resolve({ 'greeting': 'Hello World' });
			}, 500);
		});
	}

	/**
	 *
	 */
	function getStuffASyncNoPromise(callback) {
		$timeout(function() {
			return callback({ 'greeting': 'Hello World!' });
		}, 500);
	}
}

module.exports = TestService;
