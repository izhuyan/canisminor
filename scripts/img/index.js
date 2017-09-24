import fs from 'fs-extra';
import gulp from 'gulp';
import cache from 'gulp-cache';
import imagemin from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant';
import path from 'path';

const imageConfig = {
  verbose: true,
  progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
  interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
  multipass: true, //类型：Boolean 默认：false 多次优化svg直到完全优化
  use: [pngquant()],
};

const projectDir = 'dist/img';
const cachePah = 'scripts/img/.cache';
const imgCache = JSON.parse(fs.readFileSync(cachePah, 'utf-8'));

export default () => {
  const files = fs.readdirSync(projectDir);
  let ImgArray = [];
  files.forEach(item => {
    if (item.indexOf('.png') === -1) return;
    const imgPath = path.join(projectDir, item);
    if (imgCache[imgPath] && imgCache[imgPath] === fs.statSync(imgPath).size)
      return;
    ImgArray.push(imgPath);
  });

  return gulp
    .src(ImgArray, { base: '.' })
    .pipe(cache(imagemin(imageConfig)))
    .pipe(gulp.dest('.'))
    .on('end', () => {
      let cache = JSON.parse(fs.readFileSync(cachePah, 'utf-8'));
      ImgArray.forEach(png => {
        cache[png] = fs.statSync(png).size;
        console.log(png, '+ cache');
      });
      fs.writeFileSync(cachePah, JSON.stringify(cache));
    });
};
