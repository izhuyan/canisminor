import {Typist} from '../'
import classnames from 'classnames'
import './index.scss'

export default ({className,title,desc,...other})=>{

	return (
			<div className={classnames("contact-title",className)} {...other}>
				<div className="title">{title}</div>
				<Typist className="desc">{desc}</Typist>
			</div>
	)
}