export default () => {
	BaiduZhanzhang();
	BaiduTongji();
}

const BaiduZhanzhang = () => {
	const bp          = document.createElement('script');
	const curProtocol = window.location.protocol.split(':')[0];

	bp.src = (curProtocol === 'https')
		? 'https://zz.bdstatic.com/linksubmit/push.js'
		: 'http://push.zhanzhang.baidu.com/push.js';

	const s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(bp, s);
};

const BaiduTongji = () => {
	const hm = document.createElement('script');
	hm.src   = 'https://hm.baidu.com/hm.js?f801b0b6f344318a503552f12bcd55c7';
	const s  = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(hm, s);
};