import _ from 'lodash';

const classname = ['img', '.showup > div > div', '.showup > div > div > div'].join(',');

const onload = eles => {
  _.forEach(eles, ele => {
    if (hasClass(ele, 'load')) return;
    const ifVisible = window.screen.height - ele.getBoundingClientRect().top >= 0;
    if (ifVisible) {
      addClass(ele, 'load');
    } else if (!hasClass(ele, 'unload')) {
      addClass(ele, 'unload');
    }
  });
};

export default () => onload(document.querySelectorAll(classname));

function hasClass(ele, cls) {
  cls = cls || '';
  if (cls.replace(/\s/g, '').length === 0) return false; // 当cls没有参数时，返回false
  return new RegExp(' ' + cls + ' ').test(' ' + ele.className + ' ');
}

function addClass(ele, cls) {
  if (!hasClass(ele, cls)) {
    ele.className = ele.className === '' ? cls : ele.className + ' ' + cls;
  }
}

// function removeClass(ele, cls) {
//  if (hasClass(ele, cls)) {
//    var newClass = ' ' + ele.className.replace(/[\t\r\n]/g, '') + ' ';
//    while (newClass.indexOf(' ' + cls + ' ') >= 0) {
//      newClass = newClass.replace(' ' + cls + ' ', ' ');
//    }
//    ele.className = newClass.replace(/^\s+|\s+$/g, '');
//  }
// }
