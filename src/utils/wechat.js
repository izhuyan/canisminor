 import wx from 'weixin-jsapi'
import fetch from 'dva/fetch';
import { checkStatus, parseJSON } from './request';

function wxConfig(data) {
	window.wx.config({
		                 debug    : false,
		                 appId    : 'wx8418a1c9c6dd04a3',
		                 timestamp: data.timestamp,
		                 nonceStr : data.nonceStr,
		                 signature: data.signature,
		                 jsApiList: [
			                 'onMenuShareTimeline',
			                 'onMenuShareAppMessage',
			                 'onMenuShareQQ',
			                 'onMenuShareWeibo',
			                 'onMenuShareQZone'
		                 ]
	                 });
	wxShareInfo();
}

function wxShareInfo() {

	let ERROR_COUNT = 0;

	window.wx.error(() => {
		ERROR_COUNT += 1;
		if (ERROR_COUNT > 10) return;
		wxSign();
	});

	const shareOpt = {
		title  : 'CanisMinor',
		desc   : 'UI/UX Designer & FE Developer',
		link   : window.location.href,
		imgUrl : 'https://canisminor.cc/share.png',
		success: () => {},
		cancel : () => {}
	};

	window.wx.ready(() => {
		window.wx.onMenuShareTimeline(shareOpt);
		window.wx.onMenuShareAppMessage(shareOpt);
		window.wx.onMenuShareQQ(shareOpt);
		window.wx.onMenuShareWeibo(shareOpt);
		window.wx.onMenuShareQZone(shareOpt);
	});
}

const wxSign = () => {
	const fetchOpt = {
		method : 'POST',
		headers: {
			'Accept'      : 'application/json',
			'Content-Type': 'application/json'
		},
		body   : JSON.stringify({url: window.location.href.split('#')[0]})
	};

	fetch(`https://canisminor.cc/api/wechat/sign`, fetchOpt)
		.then(checkStatus)
		.then(parseJSON)
		.then(data => wxConfig(data))
		.catch(err => console.error(err));
};

export default wxSign;