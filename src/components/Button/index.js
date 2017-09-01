import clasnames from 'classnames'
import "./index.scss"

export default ({children, className, outline = false, ...other}) => {
	let classConfig = clasnames(
		className,
		{
			"cm-btn"        : true,
			"cm-btn-default": !outline,
			"cm-btn-outline": outline
		}
	)
	return <a className={classConfig} role="button" {...other}>{children}</a>
}