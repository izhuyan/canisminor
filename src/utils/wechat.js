// import wx from 'weixin-jsapi'
import fetch from 'dva/fetch';
import {checkStatus, parseJSON} from "./request"
const wx = window.wx

export default () => {
	fetch(`https://canisminor.cc/api/wechat`, {
		method: "POST",
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({url: window.location.href})
	}).then(checkStatus)
			.then(parseJSON)
			.then(data => configWX(data.appid, data.timestamp, data.nonceStr, data.signature))
}

function configWX(appId, timestamp, nonceStr, signature) {
	wx.config({
		debug: true,
		appId: appId,
		timestamp: timestamp,
		nonceStr: nonceStr,
		signature: signature,
		jsApiList: [
			'onMenuShareTimeline',
			'onMenuShareAppMessage'
		]
	})

	setShareInfo()
}

function setShareInfo() {

	const shareConfig = {
		title: 'CanisMinor',
		desc: 'UI/UX Designer & FE Developer',
		link: window.location.href,
		imgUrl: 'https://canisminor.cc/favicons/share.png',
		fail: () => alert('fail'),
		success: () => alert('success'),
		cancel: () => alert('cancel')
	}

	wx.ready(() => {
		wx.onMenuShareTimeline(shareConfig); // 分享到朋友圈
		wx.onMenuShareAppMessage(shareConfig); // 分享给微信好友
	})
}


