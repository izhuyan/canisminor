// import wx from 'weixin-jsapi'
import fetch from 'dva/fetch';
import {checkStatus, parseJSON} from "./request"

function configWX(data) {
	window.wx.config({
		debug: false,
		appId: "wx8418a1c9c6dd04a3",
		timestamp: data.timestamp,
		nonceStr: data.nonceStr,
		signature: data.signature,
		jsApiList: ['onMenuShareTimeline',
		            'onMenuShareAppMessage',
		            'onMenuShareQQ',
		            'onMenuShareWeibo',
		            'onMenuShareQZone',
		            'chooseImage',
		            'uploadImage',
		            'previewImage',]
	})
	setShareInfo()
}

function setShareInfo() {
	const shareOpt = {
		title: 'CanisMinor',
		desc: 'UI/UX Designer & FE Developer',
		link: window.location.href,
		imgUrl: 'https://canisminor.cc/favicons/share.png',
	}

	window.wx.ready(() => {
		window.wx.onMenuShareTimeline({
			title: shareOpt.title,
			link: shareOpt.link,
			imgUrl: shareOpt.imgUrl,
			success() {
			},
			cancel() {
			}
		});
		window.wx.onMenuShareAppMessage({
			title: shareOpt.title,
			desc: shareOpt.desc,
			link: shareOpt.link,
			imgUrl: shareOpt.imgUrl,
			type: 'link',
			dataUrl: '',
			success() {
			},
			cancel() {
			}
		});
	})
}

export default () => {
	const fetchOpt = {
		method: "POST",
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({url: location.href.split('#')[0]})
	}

	fetch(`https://canisminor.cc/api/wechat`, fetchOpt)
			.then(checkStatus)
			.then(parseJSON)
			.then(data => configWX(data))
			.catch(err => console.error(err));
}
