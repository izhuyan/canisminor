import { Icon } from '../';
import './index.scss';

export default ({content}) => {
	return (
		<div className="doc-title">
			<div className="icon">
				<Icon type={`doc-${content.type}`}/>
			</div>
			<div className="title">{content.text.toUpperCase()}</div>
			<div className="desc">{content.desc}</div>
		</div>
	)
		;
}