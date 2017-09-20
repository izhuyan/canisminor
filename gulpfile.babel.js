import gulp from 'gulp';
import {sketch2json, json2sketch} from './scripts/sketch'

gulp.task('sketch2json', sketch2json);
gulp.task('json2sketch', json2sketch);