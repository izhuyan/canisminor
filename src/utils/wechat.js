// import wx from 'weixin-jsapi'
import fetch from 'dva/fetch';
import {checkStatus, parseJSON} from "./request"

function wxConfig(data) {
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
	wxShareInfo()
}

function wxShareInfo() {

	let ERROR_COUNT = 0;

	window.wx.error(() => {
		ERROR_COUNT += 1;
		// 最多重试10次
		if (ERROR_COUNT > 10) {
			return;
		}
		wxSign();
	});
	
	const shareOpt = {
		title: 'CanisMinor',
		desc: 'UI/UX Designer & FE Developer',
		link: window.location.href,
		imgUrl: 'https://canisminor.cc/share.png',
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

const wxSign= () => {
	const fetchOpt = {
		method: "POST",
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({url: window.location.href.split('#')[0]})
	}

	fetch(`https://canisminor.cc/api/wechat/sign`, fetchOpt)
			.then(checkStatus)
			.then(parseJSON)
			.then(data => wxConfig(data))
			.catch(err => console.error(err));
}

export default wxSign;