import classnames from 'classnames';
import './index.scss';

export default ({location, children}) => {
	const pathname    = location.pathname;
	const classConfig = classnames(
		{
			'bg-shape'           : true,
			'bg-shape__animation': pathname !== '/',
			'bg-shape__intro'    : pathname === '/home',
			'bg-shape__project'  : pathname === '/project',
			'bg-shape__contact'  : pathname === '/contact'
		});
	return (
		<div className="root">
			<div className="bg-box">
				<img className={classConfig} src="/img/bg.png"/>
			</div>
			{children}
		</div>
	);
}