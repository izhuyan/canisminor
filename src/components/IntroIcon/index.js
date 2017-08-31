import { Icon } from '../';
import "./index.scss"

export default ({type, text}) => (
	<div className="intro-icon">
		<div className="intro-icon-box">
			<Icon type={`doc-${type}`}/>
		</div>
		<div className="intro-icon-text">{text.toUpperCase()}</div>
	</div>
);