const gulp = require('gulp'),
		imagemin = require('gulp-imagemin'),
		pngquant = require('imagemin-pngquant'),
		cache = require('gulp-cache');

const imageConfig = {
	verbose: true,
	progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
	interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
	multipass: true, //类型：Boolean 默认：false 多次优化svg直到完全优化
	use: [pngquant()]
}

gulp.task('img', () => {
	return gulp.src("public/img/**/*.png")
			.pipe(cache(imagemin(imageConfig)))
			.pipe(gulp.dest('src/img/'))
			.pipe(gulp.dest('public/img/'))
});