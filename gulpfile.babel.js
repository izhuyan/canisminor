import gulp from 'gulp';
import img from "./scripts/img";
import markd from "./scripts/markd";
import {sketch2json, json2sketch} from './scripts/sketch'

gulp.task('img', img);
gulp.task('markd', markd);
gulp.task('sketch2json', sketch2json);
gulp.task('json2sketch', json2sketch);