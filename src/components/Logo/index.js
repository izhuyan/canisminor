import { Icon, rgba, styled } from '../';

export default ({ size = 4, color = ['#222', '#555'], alpha = 0.5, ...other }) => {
  const Color = color.length > 1 ? `linear-gradient(45deg, ${color[0]}, ${color[1]})` : color;
  const View = styled.div`
    font-size: ${size * 2}rem;
    color: transparent;
    display: flex;
    position: relative;
  `;
  let ShadowGroup = styled.div`
    position: absolute;
    top: 0;
    left: 0;
  `;
  const LogoGroup = styled.div`
    background: ${Color};
    -webkit-background-clip: text;
  `;
  let Logo = styled(Icon)`
    font-size: inherit;
    &:nth-child(2) {
      margin-left: -${size}rem;
    }
    &:nth-child(3) {
      margin-left: -${size}rem;
    }
  `;
  const Shadow = styled(Icon)`
    font-size: inherit;
    &:nth-child(1) {
      background: linear-gradient(-90deg, ${rgba('#000', alpha)} 0%, transparent 30%);
      -webkit-background-clip: text;
    }
    &:nth-child(2) {
      background: linear-gradient(-90deg, ${rgba('#000', alpha)} 0%, transparent 40%);
      -webkit-background-clip: text;
      margin-left: -${size}rem;
    }
  `;

  return (
    <View {...other}>
      <ShadowGroup>
        <Shadow type="logo-shadow-1" />
        <Shadow type="logo-shadow-2" />
      </ShadowGroup>
      <LogoGroup>
        <Logo type="logo-1" />
        <Logo type="logo-2" />
        <Logo type="logo-2" />
      </LogoGroup>
    </View>
  );
};
