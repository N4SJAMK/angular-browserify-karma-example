'use strict';

module.exports = function(config) {
	return config.set({

		reporters:  [ 'mocha' ],
		frameworks: [ 'mocha', 'chai', 'browserify' ],

		preprocessors: {
			'test/**/*.js': 'browserify',
		},

		browserify: {
			'transform': [ 'partialify' ],
		},

		browsers: [ 'PhantomJS' ],
	});
}
