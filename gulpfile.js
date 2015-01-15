'use strict';

var gulp       = require('gulp');
var karma      = require('gulp-karma');
var source     = require('vinyl-source-stream');
var partialify = require('partialify');
var browserify = require('browserify');

gulp.task('test', function() {
	return gulp.src('./test/**/*.js')
		.pipe(karma({
			action:     'run',
			configFile: 'karma.conf.js',
		}))
		.on('error', function(err) {
			throw err;
		});
});

gulp.task('build', function() {
	return browserify('./src/app.js')
		.transform(partialify).bundle()
		.pipe(source('bundle.js')).pipe(gulp.dest('.'));
});
