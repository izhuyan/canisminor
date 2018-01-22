import gulp from 'gulp';
import htmlbeautify from 'gulp-html-beautify';
import swPrecache from 'sw-precache';
import img from './scripts/img';

gulp.task('opt:img', img);

gulp.task('opt:html', () =>
  gulp
    .src('./dist/*.html')
    .pipe(htmlbeautify({ indentSize: 2 }))
    .pipe(gulp.dest('./dist/'))
);

gulp.task('build:sw', () =>
  swPrecache.write(`dist/sw.js`, {
    stripPrefix: 'dist/',
    staticFileGlobs: ['dist/img/**/*', 'dist/favicons/*', 'dist/font/*', 'dist/*vendor*'],
    dontCacheBustUrlsMatching: /./,
  })
);
