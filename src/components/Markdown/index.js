import marked from "marked";
import path from "path";
import prism from "prismjs";
import bash from "prismjs/components/prism-bash";
import sass from "prismjs/components/prism-sass";
import json from "prismjs/components/prism-json";
import jsx from "prismjs/components/prism-jsx";
import md from "prismjs/components/prism-markdown";
import yaml from "prismjs/components/prism-yaml";
import { Link } from "dva/router";
import timeFormat from "../../utils/timeFormat";
import styles from "./index.scss";

const extensions = {
  bash,
  js: jsx,
  scss: sass,
  sass,
  json,
  md,
  yaml,
  html: "markup",
  ejs: "markup",
  svg: "markup",
  xml: "markup",
  py: "python",
  rb: "ruby"
};

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: (code, lang) => {
    const language = !prism.languages.hasOwnProperty(lang)
      ? extensions[lang] || "markup"
      : lang;
    return prism.highlight(code, prism.languages[language]);
  }
});

export default ({ data = { title: "", body: "", filename: "" }, ...other }) => {
  const body = data.body;
  return (
    <div {...other}>
      {window.location.pathname === "/blog" ? (
        <Link className={styles.title} to={path.join("blog", data.filename)}>
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
