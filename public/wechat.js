$(document).ready(function () {
	// using jQuery
	function getCookie(name) {
		var cookieValue = null;
		if (document.cookie && document.cookie != '') {
			var cookies = document.cookie.split(';');
			for (var i = 0; i < cookies.length; i++) {
				var cookie = jQuery.trim(cookies[i]);
				// Does this cookie string begin with the name we want?
				if (cookie.substring(0, name.length + 1) == (name + '=')) {
					cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
					break;
				}
			}
		}
		return cookieValue;
	}

	var csrftoken = getCookie('csrftoken');

	function csrfSafeMethod(method) {
		// these HTTP methods do not require CSRF protection
		return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
	}

	$.ajaxSetup({
		beforeSend: function (xhr, settings) {
			if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
				xhr.setRequestHeader("X-CSRFToken", csrftoken);
			}
		}
	});

	var successCallback = function (data) {
		wx.config({
			debug: false,
			appId: data.data.appid,
			timestamp: data.data.timestamp,
			nonceStr: data.data.nonceStr,
			signature: data.data.signature,
			jsApiList: ['onMenuShareTimeline',
			            'onMenuShareAppMessage',
			            'onMenuShareQQ',
			            'onMenuShareWeibo',
			            'onMenuShareQZone']
		});

		wx.ready(function () {
			const ShareConfig = {
				title: 'CanisMinor',
				desc: 'UI/UX Designer & FE Developer',
				link: window.location.href,
				imgUrl: window.location.origin + '/favicons/share.png',
				success: function () {},
				cancel: function () {}
			}
			wx.onMenuShareTimeline(ShareConfig);
			wx.onMenuShareAppMessage(ShareConfig);
			wx.onMenuShareQQ(ShareConfig);
			wx.onMenuShareWeibo(ShareConfig);
			wx.onMenuShareQZone(ShareConfig);
		});
	};

	var dataPost = {'url': location.href.split('#')[0]};

	$.post(window.location.origin + '/api/wechat/sign', dataPost, successCallback);

})