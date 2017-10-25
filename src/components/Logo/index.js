import { Icon, keyframes, rgba, styled } from '../';

export default ({
  size = 4,
  color = 'linear-gradient(45deg, #111, #555)',
  alpha = 0.5,
  speed = 1,
  delay = 1,
  animation = false,
  ...other
}) => {
  const View = styled.div`
    font-size: ${size * 2}rem;
    color: transparent;
    display: flex;
    height: ${size * 2}rem;
    position: relative;
  `;
  let ShadowGroup = styled.div`
    position: absolute;
    top: 0;
    left: 0;
  `;
  const LogoGroup = styled.div`
    background: ${color};
    -webkit-background-clip: text;
  `;
  let Logo = styled(Icon)`
    font-size: inherit;
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
  if (animation) {
    const Logo1 = keyframes`
		0% {margin-left: ${size}rem;}
		100% {margin-left: 0;}
		`;
    const Logo2 = keyframes`
		0% {margin-left: -${2 * size}rem;}
		100% {margin-left: -${size}rem;}
		`;
    const Logo3 = keyframes`
		0% {margin-left: -${2 * size}rem;}
		100% {margin-left: -${size}rem;}
		`;
    Logo = Logo.extend`
      animation: ${speed}s forwards linear;
      animation-delay: ${delay}s;
      &:nth-child(1) {
        margin-left: ${size}rem;
        animation-name: ${Logo1};
      }
      &:nth-child(2) {
        margin-left: -${2 * size}rem;
        animation-name: ${Logo2};
      }
      &:nth-child(3) {
        margin-left: -${2 * size}rem;
        animation-name: ${Logo3};
      }
    `;
    const opacityShadow = keyframes`
		0% {opacity: 0;}
		100% {opacity: 1;}
		`;
    ShadowGroup = ShadowGroup.extend`
      opacity: 0;
      animation: ${opacityShadow} 1s forwards linear;
      animation-delay: ${delay + speed}s;
    `;
  } else {
    Logo = Logo.extend`
      &:nth-child(2) {
        margin-left: -${size}rem;
      }
      &:nth-child(3) {
        margin-left: -${size}rem;
      }
    `;
  }
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
