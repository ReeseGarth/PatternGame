var gulp = require('gulp'),
	browserify = require('browserify'),
	watchify = require('watchify'),
	browserSync = require('browser-sync'),
	source = require('vinyl-source-stream'),
	destFile = 'bundle.js';

var gulpPlugins = require('gulp-load-plugins')({
	pattern: ['gulp-*', 'gulp.*'],
	replaceString: /\bgulp[\-.]/
});

var paths = {
	root: 'public/',
	srcJS: 'public/js/',
	srcCSS: 'public/css/',
	srcFONT: 'public/fonts/',
	dist: 'public/dist/',
	test: 'test/'
};

gulp.task('watch',function() {
	//browserify config
	var watcher = watchify(browserify({
		entries: ['./public/js/main.js'],
		cache: {},
		packageCache: {},
		plugin: [watchify],
		debug: true
	}));

	return watcher.on('update', function() {
		watcher.bundle()
		.on('error', function(e) {
			gulpPlugins.util.log(e);
		})
		.pipe(source(destFile))
		.pipe(gulp.dest(paths.srcJS))
		console.log('Updated.');
	})
		.bundle()
		.pipe(source(destFile))
		.pipe(gulp.dest(paths.srcJS));
});

gulp.task('copy-bootstrap', function() {
	gulp.src('node_modules/bootstrap/dist/css/*')
		.pipe(gulp.dest(paths.srcCSS));
	gulp.src('node_modules/bootstrap/dist/fonts/*')
		.pipe(gulp.dest(paths.srcFONT));
});

gulp.task('browser-sync', ['nodemon'], function() {
	browserSync.init({
		proxy: "http://localhost:3000",
		files: ['public/**/*.*'],
		browser: 'google chrome',
		port: 5000
	});
});

gulp.task('nodemon', function(cb) {
	var started = false;

	return gulpPlugins.nodemon({
		script: 'server.js'
	}).on('start', function() {
		if (!started) {
			cb();
			started = true;
		}
	});
});

gulp.task('default', ['watch', 'copy-bootstrap', 'browser-sync']);