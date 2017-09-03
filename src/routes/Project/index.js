import {Title}from'../../components'
import {Collapse} from 'antd';
import './index.scss';

const Panel = Collapse.Panel;

export default ({}) => {

	const proHeight = (min = 0) => {
		return {minHeight: `${parseInt(window.innerHeight) - min}px`};
	};

	let num = 0

	const imgLib = (title, path, count) => {
		let list = [];
		num++
		const numTilte = (num.toString().length > 1) ? num : `0${num}`

		for (let i = 1; i <= count; i++) {
			list.push(<img src={`img/${path}_${i}.png`} width="960"/>);
		}
		return (<Panel
				key={numTilte}
				header={
					<div className="pro-title">
						<span className="num">{numTilte}</span>
						{title}
					</div>
				}
		>{list}</Panel>)
	};

	return (
			<div className="project">
				<Title style={proHeight(150)}
				       title="Sense & pixels"
				       desc="wanna see more ? coming soon..."/>
				<Collapse defaultActiveKey={['01']}>
					{imgLib("熊猫金库", 'p_xm/xm', 10)}
					{imgLib("智子", 'p_zz/zz', 11)}
					{imgLib("沪江学习", 'p_hj/hj', 10)}
					{imgLib("须臾映社", 'p_iz/iz', 53)}
				</Collapse>
			</div>
	);
}