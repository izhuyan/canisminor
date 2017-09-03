import {Title,Button}from'../../components'
import {Collapse} from 'antd';
import './index.scss';

const Panel = Collapse.Panel;

const imgLib = (num, title, path, page,footer) => {
	const list = [];
	const numTilte = (num.toString().length > 1) ? num : `0${num}`
	const header = (<div className="pro-title"><span className="num">{numTilte}</span>{title}</div>)
	for (let i = 1; i <= page; i++) list.push(<img src={`img/p_${path}/${path}_${i}.png`} width="960"/>);
	return (<Panel key={numTilte} header={header}>{list}{footer}</Panel>)
};

export default () => {

	const proHeight = (min = 0) => {
		return {minHeight: `${parseInt(window.innerHeight) - min}px`};
	};

	let num = 1

	return (
			<div className="project">
				<Title style={proHeight(150)}
				       title="Sense & pixels"
				       desc="wanna see more ? coming soon..."/>
				<Collapse defaultActiveKey={['01']}>
					{imgLib(num++, "熊猫金库", 'xm', 10)}
					{imgLib(num++, "智子", 'zz', 11,<Button url="http://www.zhizigroup.com/">智子 Wisman</Button>)}
					{imgLib(num++, "沪江学习", 'hj', 10,<Button url="http://www.hujiang.com/app/hujiang/">沪江学习</Button>)}
					{imgLib(num++, "须臾映社", 'iz', 53,<Button url="http://instant-zine.lofter.com/">Instant-Zine</Button>)}
				</Collapse>
			</div>
	);
}