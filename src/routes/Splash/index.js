import { Link } from 'dva/router';
import Typist from 'react-typist';
import './index.scss';

export default () => {
	const cursor = {
		show        : true,
		blink       : true,
		element     : '_',
		hideWhenDone: false
	};
	return (
		<Link className="splash" to="/home">
			<div className="logo-gif"/>
			<Typist
				className="splash-text"
				avgTypingDelay={40}
				cursor={cursor}
			><span className="splash-text-glow"/>
				The collection of curriculum vitae and<br/> rescent projects
			</Typist>
		</Link>

	);
}

