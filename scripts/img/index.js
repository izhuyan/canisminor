import gulp from 'gulp';
import cache from 'gulp-cache';
import imagemin from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant';
import path from 'path';

const imageConfig = {
	verbose    : true,
	progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
	interlaced : true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
	multipass  : true, //类型：Boolean 默认：false 多次优化svg直到完全优化
	use        : [pngquant()]
};

export default () => {

	const imgPath = 'public/';
	return gulp.src(path.josn(imgPath, '**/*.png'))
	           .pipe(cache(imagemin(imageConfig)))
	           .pipe(gulp.dest(imgPath));
}