import Plyr from 'plyr';
import React from 'react';
import "./index.scss"

export default class extends React.Component {

	constructor() {
		super();
	}

	componentDidMount() {Plyr.setup();}

	render() {

		const {src} = this.props

		return (
			(
				<video controls>
					<source src={`http://qn-video.canisminor.cc/${src}`} type="video/mp4"/>
				</video>
			)
		);
	}
}