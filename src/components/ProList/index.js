import { Collapse } from 'antd';
import { Button, LazyLoad, Player } from '../../components';
import styles from './index.scss';

const Panel = Collapse.Panel;

export default ({activeKey = ['0'], content}) => {

	const loadImg = (src, key) => <LazyLoad
		key={key}
		width="960px"
		offset={-100}
		children={<img width="960" src={src}/>}
	/>;

	const ImgLib = (item, key) => {
		let imgListView = [];
		let numTilte    = (key + 1).toString();
		numTilte        = (numTilte.length > 1) ? numTilte : `0${numTilte}`;

		const header = (
			<div className={styles.title}>
				<span className={styles.num}>{numTilte}</span>
				{item.title}
			</div>);

		if (item.imgPath && item.imgPage) {
			let imgList = [];
			for (let i = 1; i <= item.imgPage; i++) {
				imgList.push(`img/p_${item.imgPath}/${item.imgPath}_${i}.png`);
			}
			imgListView = imgList.map(loadImg);
		}

		const video = item.video ? <Player src={item.video}/> : [];
		const btn   = item.btn ? <Button url={item.btn.url} children={item.btn.title}/> : [];

		return <Panel key={key} header={header}>
			{video}{imgListView}{btn}
		</Panel>;
	};
	return <Collapse defaultActiveKey={activeKey}>
		{content.map(ImgLib)}
	</Collapse>;
}