import gulp from 'gulp';
import fs from 'fs-extra';
import htmlbeautify from 'gulp-html-beautify';
import swPrecache from 'sw-precache';
import * as raw from './src/config';

gulp.task('build:api', () => fs.writeFileSync(
	'public/raw-data', JSON.stringify(raw))
);

gulp.task('opt:html', () =>
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
