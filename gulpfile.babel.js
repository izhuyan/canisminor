import gulp from 'gulp';
import img from './scripts/img';
import stylefmt from 'gulp-stylefmt'

gulp.task('build:img', img);

gulp.task('stylefmt',  () => {
	return gulp.src('src/**/*.scss')
						 .pipe(stylefmt())
						 .pipe(gulp.dest('test'));
});