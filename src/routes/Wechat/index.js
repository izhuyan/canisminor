import style from './index.scss';

const content = [
  {
    title: '微信号',
    img: '/img/wx-i.png',
  },
  {
    title: '微信小程序',
    img: '/img/wx-app.png',
  },
  {
    title: '微信公众号',
    img: '/img/wx-gzh.png',
  },
];

export default () => {
  const Qrcde = content.map(item => (
    <div className={style.qrcode} key={item.title}>
      <img src={item.img} alt={item.title} />
      <p>{item.title}</p>
    </div>
  ));
  return <div className={style.page}>{Qrcde}</div>;
};
