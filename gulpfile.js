'use strict';

var gulp       = require('gulp');
var jscs       = require('gulp-jscs');
var karma      = require('gulp-karma');
var jshint     = require('gulp-jshint');
var source     = require('vinyl-source-stream');
var partialify = require('partialify');
var browserify = require('browserify');

gulp.task('jscs', function() {
	return gulp.src(['src/**/*.js', 'test/**/*.js'])
		.pipe(jscs());
});

gulp.task('jshint', ['jscs'], function() {
	return gulp.src(['src/**/*.js', 'test/**/*.js'])
		.pipe(jshint('.jshintrc'))
		.pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('test', ['jshint'], function() {
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
