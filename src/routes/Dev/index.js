import { Component, Logo, styled } from '../../components';

export default class extends Component {
  render() {
    const View = styled.div`margin: 2rem;`;
    return (
      <View>
        <Logo size={2} />
        <Logo size={2} animation />
      </View>
    );
  }
}
