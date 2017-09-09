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
			debug: true,
			appId: data.appid,
			timestamp: data.timestamp,
			nonceStr: data.nonceStr,
			signature: data.signature,
			jsApiList: ['onMenuShareTimeline',
			            'onMenuShareAppMessage',
			            'onMenuShareQQ',
			            'onMenuShareWeibo',
			            'onMenuShareQZone']
		});

		const shareOpt = {
			title: 'CanisMinor',
			desc: 'UI/UX Designer & FE Developer',
			link: window.location.href,
			imgUrl: window.location.origin + '/favicons/share.png',
			success: function () {},
			cancel: function () {}
		}

		wx.ready(function () {

			window.wx.onMenuShareTimeline({
				title: shareOpt.title,
				link: shareOpt.link,
				imgUrl: shareOpt.imgUrl,
				success: function () {},
				cancel: function () {}
			});
			window.wx.onMenuShareAppMessage({
				title: shareOpt.title,
				desc: shareOpt.desc,
				link: shareOpt.link,
				imgUrl: shareOpt.imgUrl,
				type: 'link',
				dataUrl: '',
				success: function () {},
				cancel: function () {}
			});
		});
	};

	var dataPost = JSON.stringify({'url': location.href.split('#')[0]});

	$.post(window.location.origin + '/api/wechat/sign', dataPost, successCallback);

})