import {Link} from 'dva/router';
import {Typist} from '../../components';
import './index.scss';

export default () => {

	return (
			<Link className="splash" to="/home">
				<div className="logo-gif"/>
				<Typist className="splash-text">
					<span className="splash-text-glow"/>The collection of curriculum vitae and<br/> rescent projects
				</Typist>
			</Link>
	);
}

