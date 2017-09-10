import {Spin} from 'antd';
import LazyLoad from 'react-lazyload';
import "./index.scss"

export default ({
	                children,
	                offset = 100,
	                width = "100%",
	                height = 500,
	                background = "transparent"
                }) => {
	const placeholder = (
			<div className="placeholder" style={{width: width, height: height + "px", background: background}}>
				<Spin size="large"/>
			</div>
	)
	return <LazyLoad height={height}
	                 offset={offset}
	                 placeholder={placeholder}
	                 children={children}
	                 once/>
}