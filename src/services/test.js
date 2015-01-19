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
				return resolve({ name: 'Masi', age: 25 });
			}, 500);
		});
	}

	/**
	 *
	 */
	function getStuffASyncNoPromise(callback) {
		$timeout(function() {
			return callback({ name: 'Masi', age: 25 });
		}, 500);
	}
}

module.exports = TestService;
