import {Icon as AntIcon} from 'antd'
import LazyLoad from 'react-lazyload';
import "./index.scss"
export default ({
	                children,
	                offset = 100,
	                width = "100%",
	                height = 500,
	                background = "transparent",
	                color = '#62e6ac'
                }) => {
	const placeholder = (
			<div className="placeholder" style={{width: width, height: height + "px", background: background}}>
				<AntIcon type="loading" style={{fontSize: 32, color: color}}/>
			</div>
	)
	return <LazyLoad height={height}
	                 offset={offset}
	                 placeholder={placeholder}
	                 children={children}
	                 once/>
}