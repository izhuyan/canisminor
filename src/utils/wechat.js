// import wx from 'weixin-jsapi'
import fetch from 'dva/fetch';
import {checkStatus, parseJSON} from "./request"

export default () => {

	const jsApiList = [
		'onMenuShareTimeline',
		'onMenuShareAppMessage'
	]

	fetch(`https://canisminor.cc/api/wechat`, {
		method: "POST",
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({url: window.location.href})
	}).then(checkStatus)
			.then(parseJSON)
			.then(data => {
				window.wx.config({
					debug: true,
					appId: data.appid, // 必填，公众号的唯一标识
					timestamp: data.timestamp, // 必填，生成签名的时间戳
					nonceStr: data.nonceStr, // 必填，生成签名的随机串
					signature: data.signature, // 必填，签名，见附录1
					jsApiList: jsApiList
				})
				setShareInfo()
			})
}

export function setShareInfo() {
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


