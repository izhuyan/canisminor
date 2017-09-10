import {Title, Button, LazyLoad}from'../../components'
import {Collapse} from 'antd';
import {Player} from 'video-react';
import "video-react/dist/video-react.css"
import './index.scss';

const Panel = Collapse.Panel;

const VPlayer = ({src}) => <Player>
	<source src={`http://ovp0fxang.bkt.clouddn.com/${src}`}/>
</Player>

export default () => {

	const proHeight = (min = 0) => {
		minHeight: `${parseInt(window.innerHeight) - min}px`
	}

	const libData = [
		{
			title: "熊猫金库",
			imgPath: 'xm',
			imgPage: 10
		},
		{
			title: "智子",
			imgPath: 'zz',
			imgPage: 11,
			extra: <Button url="http://www.zhizigroup.com/">智子 Wisman</Button>
		},
		{
			title: "沪江学习",
			imgPath: 'hj',
			imgPage: 10,
			extra: <Button url="http://www.hujiang.com/app/hujiang/">沪江学习</Button>
		},
		{
			title: "沪江LOGO演绎",
			extra: <VPlayer src="hujiang.mp4"/>
		},
		{
			title: "须臾映社",
			imgPath: 'iz',
			imgPage: 53,
			extra: <Button url="http://instant-zine.lofter.com/">Instant-Zine</Button>
		},
		{
			title: "须臾映社VD",
			extra: <VPlayer src="instant-zine.mp4"/>
		}
	]

	const ImgLib = libData.map((item, key) => {

		let imgListView = []
		let numTilte = key + 1;
		numTilte = (numTilte.toString().length > 1) ? numTilte : `0${numTilte}`
		if (item.imgPath && item.imgPage) {
			let imgList = []
			for (let i = 1; i <= item.imgPage; i++) imgList.push(`img/p_${item.imgPath}/${item.imgPath}_${i}.png`);
			imgListView = imgList.map((imgSrc, imgCount) => (
					<LazyLoad key={imgSrc}
					          width="960px"
					          offset={-100}
					          children={<img width="960" src={imgSrc}/>}
					/>))
		}
		return (
				<Panel key={key}
				       header={
					       <div className="pro-title">
						       <span className="num">{numTilte}</span>
						       {item.title}
					       </div>
				       }>
					{imgListView}
					{item.extra}
				</Panel>
		)
	})


	return (
			<div className="project">
				<Title style={proHeight(150)}
				       title="Sense & pixels"
				       desc="wanna see more ? updating soon..."/>
				<Collapse defaultActiveKey={["0"]} children={ImgLib}/>
			</div>
	);
}