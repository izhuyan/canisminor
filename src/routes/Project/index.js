import './index.scss';

export default ({}) => {

	const imgLib = (path, count) => {
		let list = [];
		for (let i = 1; i <= count; i++) {
			list.push(<img src={`img/${path}_${i}.png`} width="960"/>);
		}
		return list;
	};

	return (
		<div className="project">
			<div className="dev">
				<div className="title">Sense & pixels</div>
				<div className="desc">want see more ? coming soon..</div>
				<div className="pro-title">
					<span className="num">01</span>熊猫金库
				</div>
				{imgLib('p_xm/xm', 10)}
				<div className="pro-title">
					<span className="num">02</span>智子
				</div>
				{imgLib('p_zz/zz', 11)}
			</div>
		</div>
	);
}