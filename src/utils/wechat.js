import wx from 'weixin-jsapi'
import fetch from 'dva/fetch';
import {checkStatus, parseJSON} from "./request"
import { message } from 'antd';
export default () => {

	const shareConfig = {
		title: 'CanisMinor', // 分享标题
		desc: 'UI/UX Designer & FE Developer', // 分享描述
		link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
		imgUrl: 'https://canisminor.cc/favicons/share.png', // 分享图标
		type: '', // 分享类型,music、video或link，不填默认为link
		dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
		success: () => message.success('Share success'),
		cancel: () => message.error('Share cancel'),
	}

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
				wx.config({
					debug: true,
					appId: data.appid, // 必填，公众号的唯一标识
					timestamp: data.timestamp, // 必填，生成签名的时间戳
					nonceStr: data.nonceStr, // 必填，生成签名的随机串
					signature: data.signature, // 必填，签名，见附录1
					jsApiList: [ // 必填，需要使用的JS接口列表
						'onMenuShareTimeline',
						'onMenuShareAppMessage',
						'onMenuShareAppMessage',
						'onMenuShareQQ',
						'onMenuShareWeibo',
						'onMenuShareQZone',
					]
				})
				wx.onMenuShareTimeline(shareConfig); // 分享到朋友圈
				wx.onMenuShareAppMessage(shareConfig); // 分享给微信好友
				wx.onMenuShareQQ(shareConfig); // 分享到QQ
				wx.onMenuShareWeibo(shareConfig); // 分享到微博
				wx.onMenuShareQZone(shareConfig); // 分享到QQ空间
			})


}