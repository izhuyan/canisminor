import { concat } from 'lodash';

const react = ['react', 'react-dom'];

const dva = ['dva', 'dva/router', 'dva/fetch', 'dva/dynamic', 'dva-loading'];

const components = ['react-lazyload', 'react-typist', 'plyr', 'nprogress', 'gitment'];

const markdown = [
  'markd',
  'prismjs',
  'prismjs/components/prism-bash',
  'prismjs/components/prism-sass',
  'prismjs/components/prism-json',
  'prismjs/components/prism-jsx',
  'prismjs/components/prism-markdown',
  'prismjs/components/prism-yaml',
  'prismjs/components/prism-nginx',
];

const style = ['classnames', 'styled-components', 'polished'];

const utils = ['path', 'moment', 'moment/locale/zh-cn'];

export default concat(react, dva, components, markdown, style, utils);
