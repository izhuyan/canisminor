import marked from 'marked'
import highlight from 'highlight.js'
import  'highlight.js/styles/monokai-sublime.css'
import styles from './index.scss'

marked.setOptions({
	renderer: new marked.Renderer(),
	gfm: true,
	tables: true,
	breaks: false,
	pedantic: false,
	sanitize: false,
	smartLists: true,
	smartypants: false,
	highlight: (code) => highlight.highlightAuto(code).value
});

export default ({body, ...other}) => {
	return (
			<div className={styles.markdown} dangerouslySetInnerHTML={{__html: marked(body)}} {...other}/>
	)
}