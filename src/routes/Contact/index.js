import React from 'react'
import {Title} from '../../components'
import Gitment from 'gitment'
import 'gitment/style/default.css'
import "./index.scss"

export default class extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const gitment = new Gitment({
			owner: 'canisminor1990',
			repo: 'canisminor-comments',
			oauth: {
				client_id: '2d269c8224f46f260966',
				client_secret: '0cd026bec02b1cd2adb9616d3f2ceba395bcf939',
			}
		})
		gitment.renderComments('comments')
		gitment.renderEditor('editor')
	}

	render() {
		return (
				<div className="contact">
					<Title className="contact-title" title="Let's talk" desc="can comment with github accounts"/>
					<div id="comments" className="contact-comments"/>
					<div id="editor" className="contact-comments"/>
				</div>
		)
	}
}