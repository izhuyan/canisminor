import gulp from 'gulp';
import fs from 'fs-extra';
import htmlbeautify from 'gulp-html-beautify';
import swPrecache from 'sw-precache';
import img from './scripts/img';
import * as config from './src/config';

gulp.task('opt:img', img);

gulp.task('build:raw', () => fs.writeFileSync('dist/raw-data', JSON.stringify(config)));

gulp.task('opt:html', ['build:raw'], () =>
	gulp
		.src('./dist/*.html')
		.pipe(htmlbeautify({indentSize: 2}))
		.pipe(gulp.dest('./dist/'))
);

gulp.task('build:sw', () =>
	swPrecache.write(`dist/sw.js`, {
		stripPrefix              : 'dist/',
		staticFileGlobs          : ['dist/img/**/*', 'dist/favicons/*', 'dist/font/*', 'dist/*vendor*'],
		dontCacheBustUrlsMatching: /./
	})
);
