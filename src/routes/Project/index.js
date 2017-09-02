import {Title}from'../../components'
import './index.scss';

export default ({}) => {

	const proHeight = (min = 0) => {
		return {minHeight: `${parseInt(window.innerHeight) - min}px`};
	};

	let num = 0

	const imgLib = (title, path, count) => {
		let list = [];
		num++
		const numTilte = (num.toString().length > 1) ? num : `0${num}`
		list.push(
				<div className="pro-title">
					<span className="num">{numTilte}</span>{title}
				</div>
		)
		for (let i = 1; i <= count; i++) {
			list.push(<img src={`img/${path}_${i}.png`} width="960"/>);
		}
		return list;
	};

	return (
			<div className="project">
				<Title style={proHeight(150)}
				       title="Sense & pixels"
				       desc="wanna see more ? coming soon..."/>
				<div className="pro-item">
					{imgLib("熊猫金库", 'p_xm/xm', 10)}
				</div>
				<div className="pro-item">
					{imgLib("智子", 'p_zz/zz', 11)}
				</div>
			</div>
	);
}