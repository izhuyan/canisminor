import prism from 'prismjs';
import bash from 'prismjs/components/prism-bash';
import sass from 'prismjs/components/prism-sass';
import json from 'prismjs/components/prism-json';
import jsx from 'prismjs/components/prism-jsx';
import md from 'prismjs/components/prism-markdown';
import yaml from 'prismjs/components/prism-yaml';
import nginx from 'prismjs/components/prism-nginx';

const extensions = {
  bash,
  js: jsx,
  scss: sass,
  sass,
  json,
  md,
  yaml,
  nginx,
  html: 'markup',
  ejs: 'markup',
  svg: 'markup',
  xml: 'markup',
  py: 'python',
  rb: 'ruby',
};

export default (code, lang) => {
  const language = !prism.languages.hasOwnProperty(lang) ? extensions[lang] || 'markup' : lang;
  return prism.highlight(code, prism.languages[language]);
};
