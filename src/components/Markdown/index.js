import { Link } from 'dva/router';
import { highlightAuto } from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';
import marked from 'marked';
import path from 'path';
import timeFormat from '../../utils/timeFormat';
import styles from './index.scss';

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: code => highlightAuto(code).value,
});

export default ({ data = { title: '', body: '', filename: '' }, ...other }) => {
  const body = data.body;
  return (
    <div {...other}>
      {window.location.pathname === '/blog' ? (
        <Link className={styles.title} to={path.join('blog', data.filename)}>
          {data.title}
        </Link>
      ) : (
        <div className={styles.title}>{data.title}</div>
      )}
      <div className={styles.time}>
        <span>{timeFormat(data.filename)}</span> - CanisMinor
      </div>
      <div
        className={styles.markdown}
        dangerouslySetInnerHTML={{ __html: marked(body) }}
      />
    </div>
  );
};
