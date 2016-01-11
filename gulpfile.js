'use strict';

var gulp = require('gulp'),
	bs = require('browser-sync'),
	plugins = require('gulp-load-plugins')(),
	runSequence = require('run-sequence'),
	nib = require('nib');

// Set NODE_ENV to 'development'
gulp.task('env:dev', function() {
	process.env.NODE_ENV = 'development';
});

// Set NODE_ENV to 'production'
gulp.task('env:prod', function() {
	process.env.NODE_ENV = 'production';
});

// Set NODE_ENV to 'production'
gulp.task('env:test', function() {
	process.env.NODE_ENV = 'test';
});


// default task
gulp.task('default', ['env:dev', 'sync', 'stylus', 'watch'], function() {});

gulp.task('watch', function() {
	gulp.watch('./public/stylus/**/*.styl', ['stylus']);
});
// test
gulp.task('test', function() {
	runSequence('env:test', 'nodemon', 'e2e:ch', 'stop');
});

// build
gulp.task('build', ['env:prod', 'stylus', 'less', 'sass', 'mv'], function() {});


// server 
gulp.task('sync', ['nodemon'], function() {
	bs({
		proxy: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'http://localhost:3001',
		files: ['public/**/*.*'],
		browser: 'google chrome',
		port: 7000,
	});
});

gulp.task('nodemon', function(cb) {
	var started = false;
	return plugins.nodemon({
		script: 'app.js'
	}).on('start', function() {
		if (!started) {
			cb();
			started = true;
		}
	});
});


// stylus
gulp.task('stylus', ['stylus:lint', 'stylus:compile']);

gulp.task('stylus:lint', function() {
	return gulp.src(['./public/stylus/*.styl', './public/stylus/**/*.styl'])
		.pipe(plugins.stylint())
		.pipe(plugins.stylint.reporter())
		.pipe(plugins.stylint.reporter('fail', {
			failOnWarning: false,
			failOnError: false
		}));
});

gulp.task('stylus:compile', function() {
	return gulp.src(['./public/stylus/juicy-grid.styl', './public/stylus/wfb-grid.styl'])
		.pipe(plugins.stylus({
			use: nib(),
			compress: true
		}))
		.on('error', function(err) {
			plugins.util.log(plugins.util.colors.white.bgRed(' ! error occurred compiling stylus file '));
			plugins.util.log(err.message);
		})
		.pipe(gulp.dest('./public/stylus/dist/'))
		.pipe(bs.stream());
});

// e2e tests
gulp.task('e2e:ch', function() {
	return gulp.src('')
		.pipe(plugins.nightwatch({
			configFile: './nightwatch.json'
		}));
});
gulp.task('e2e:ff', function() {
	return gulp.src('')
		.pipe(plugins.nightwatch({
			configFile: './nightwatch_ff.json'
		}));
});

gulp.task('stop', function() {
	process.exit();
});
