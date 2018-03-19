import * as moment from 'moment';
import 'moment/locale/zh-cn';

export default str => {
  if (str === '') return;
  const Moment = moment(str, 'YYYYMMDDHHmmss');
  const time = new Date(Moment).getTime();
  const timeNow = new Date().getTime();
  const abs = Math.abs(parseInt((timeNow - time) / 1000, 10));
  let date;

  if (abs < 2592000) {
    Moment.locale('zh-cn');
    date = Moment.fromNow();
  } else {
    Moment.locale('en');
    date = Moment.format('MMM Do YYYY');
  }

  return date;
};
