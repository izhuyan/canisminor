// import wx from 'weixin-jsapi'
import fetch from 'dva/fetch';
import {checkStatus, parseJSON} from "./request"

export default () => {
	fetch(`https://canisminor.cc/api/wechat`, {
		method: "POST",
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({url: location.href.split('#')[0]})
	}).then(checkStatus)
			.then(parseJSON)
			.then(data => configWX(data))
}

function configWX(data) {
	window.wx.config({
		debug: true,
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

	const shareConfig = {
		title: 'CanisMinor',
		desc: 'UI/UX Designer & FE Developer',
		link: window.location.href,
		imgUrl: 'https://canisminor.cc/favicons/share.png',
	}

	window.wx.ready(() => {
		window.wx.onMenuShareTimeline({
			title: shareConfig.title,
			link: shareConfig.link,
			imgUrl: shareConfig.imgUrl,
			success() {
			},
			cancel() {
			}
		});
		window.wx.onMenuShareAppMessage({
			title: shareConfig.title,
			desc: shareConfig.desc,
			link: shareConfig.link,
			imgUrl: shareConfig.imgUrl,
			type: 'link',
			dataUrl: '',
			success() {
			},
			cancel() {
			}
		});
	})
}


