'use strict';

/**
 *
 */
function PersonService($q, $timeout) {
	return {
		getPersonASync: getPersonASync,
	}

	/**
	 *
	 */
	function getPersonASync() {
		return $q(function(resolve) {
			$timeout(function() {
				return resolve({ name: 'Masi', age: 25 });
			}, 500);
		});
	}
}

module.exports = PersonService;
