import './index.scss';

export default ({}) => {
	const proHeight = (min = 0) => {
		return {minHeight: `${parseInt(window.innerHeight) - min}px`};
	};
	return (
		<div className="project">
			<div className="dev" style={proHeight(150)}>
				<div className="title">Updating</div>
				<div className="desc">coming soon..</div>
			</div>
		</div>
	);
}