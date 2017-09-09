import fetch from 'dva/fetch';

const shareConfig = {
	title: 'CanisMinor', // 分享标题
	desc: 'UI / UX Designer & FE Developer', // 分享描述
	link: 'https://canisminor.cc', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
	imgUrl: 'https://canisminor.cc/favicons/share.png', // 分享图标
	type: '', // 分享类型,music、video或link，不填默认为link
	dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
	success: () => console.log('[wechat] Share Success'),
	cancel: () => console.log('[wechat] Share Cancel'),
}

fetch('https://canisminor.cc/api/wechat/')
		.then(resp => {
			console.log(resp)
			const r = resp.result;
			wx.config({
				appId: r.appid, // 必填，公众号的唯一标识
				timestamp: r.timestamp, // 必填，生成签名的时间戳
				nonceStr: r.nonceStr, // 必填，生成签名的随机串
				signature: r.signature, // 必填，签名，见附录1
				jsApiList: [ // 必填，需要使用的JS接口列表
					'checkJsApi',
					'onMenuShareTimeline',
					'onMenuShareAppMessage',
					'onMenuShareQQ',
					'onMenuShareWeibo',
				]
			})
		})

wx.ready(() => {
	wx.onMenuShareTimeline(shareConfig); // 分享到朋友圈
	wx.onMenuShareAppMessage(shareConfig); // 分享给微信好友
	wx.onMenuShareQQ(shareConfig); // 分享到QQ
	wx.onMenuShareWeibo(shareConfig); // 分享到微博
	wx.onMenuShareQZone(shareConfig); // 分享到QQ空间
})