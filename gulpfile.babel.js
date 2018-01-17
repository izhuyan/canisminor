import gulp from 'gulp';
import htmlbeautify from 'gulp-html-beautify';
import img from './scripts/img';

gulp.task('build:img', img);

gulp.task('html', () => {
  const options = { indentSize: 2 };
  gulp
    .src('./dist/*.html')
    .pipe(htmlbeautify(options))
    .pipe(gulp.dest('./dist/'));
});
