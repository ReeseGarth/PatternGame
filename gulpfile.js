var gulp = require('gulp'),
	browserify = require('browserify'),
	watchify = require('watchify'),
	source = require('vinyl-source-stream'),
	browserSync = require('browser-sync').create(),
	reload = browserSync.reload,
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

gulp.task('serve', function() {


	browserSync.init({
		server: {
			baseDir: "public",
			index: "index.html"
		}
	});

	gulp.watch("public/*.html").on("change", reload);
});

gulp.task('default', ['watch', 'copy-bootstrap', 'serve']);