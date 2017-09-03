import {Title, Button}from'../../components'
import {Collapse} from 'antd';
import {Player} from 'video-react';
import "video-react/dist/video-react.css"
import './index.scss';

const Panel = Collapse.Panel;

const VPlayer = ({src}) => <Player>
	<source src={`http://ovp0fxang.bkt.clouddn.com/${src}`}/>
</Player>

const imgLib = ({num, title, path, page, footer}) => {
	const list = [];
	const numTilte = (num.toString().length > 1) ? num : `0${num}`
	const header = (<div className="pro-title"><span className="num">{numTilte}</span>{title}</div>)
	if (path) {
		for (let i = 1; i <= page; i++) list.push(<img src={`img/p_${path}/${path}_${i}.png`} width="960"/>);
	}
	list.push(footer)
	return (<Panel key={numTilte} header={header}>{list}</Panel>)
};

export default () => {

	const proHeight = (min = 0) => {
		return {minHeight: `${parseInt(window.innerHeight) - min}px`};
	};

	let num = 1

	const libData = [
		{num: num++, title: "熊猫金库", path: 'xm', page: 10},
		{
			num: num++,
			title: "智子",
			path: 'zz',
			page: 11,
			footer: <Button url="http://www.zhizigroup.com/">智子 Wisman</Button>
		},
		{
			num: num++,
			title: "沪江学习",
			path: 'hj',
			page: 10,
			footer: <Button url="http://www.hujiang.com/app/hujiang/">沪江学习</Button>
		},
		{
			num: num++,
			title: "沪江LOGO演绎",
			footer: <VPlayer src="hujiang.mp4"/>
		},
		{
			num: num++,
			title: "须臾映社",
			path: 'iz',
			page: 53,
			footer: <Button url="http://instant-zine.lofter.com/">Instant-Zine</Button>
		},
		{
			num: num++,
			title: "须臾映社VD",
			footer: <VPlayer src="instant-zine.mp4"/>
		}
	]

	return (
			<div className="project">
				<Title style={proHeight(150)}
				       title="Sense & pixels"
				       desc="wanna see more ? updating soon..."/>
				<Collapse defaultActiveKey={['01']}>
					{libData.map(item => imgLib(item))}
				</Collapse>
			</div>
	);
}