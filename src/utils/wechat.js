import wx from 'weixin-jsapi'
import fetch from 'dva/fetch';
import {checkStatus, parseJSON} from "./request"
import { message } from 'antd';
export default () => {

	const shareConfig = {
		title: 'CanisMinor',
		desc: 'test',
		link: window.location.href,
		imgUrl: 'https://canisminor.cc/favicons/share.png',
		success: () => {},
		cancel: () => {}
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

					]
				})

				wx.checkJsApi({
					jsApiList: ['onMenuShareTimeline',
					            'onMenuShareAppMessage',], // 需要检测的JS接口列表，所有JS接口列表见附录2,
					success: (res) =>{
						message.info(res)
					}
				});

				wx.ready(()=>{
					wx.onMenuShareTimeline(shareConfig); // 分享到朋友圈
					wx.onMenuShareAppMessage(shareConfig); // 分享给微信好友
				})

			})



}