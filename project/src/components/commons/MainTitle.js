import { Component } from 'react';

class MainTitle extends Component {
  printInfo(msg) {
    //부모 쪽에서 넘어오는 데이터
    console.log('MainTitle', msg);
  }
  render() {
    const { children } = this.props;
    return <h1>{children}</h1>;
  }
}

export default MainTitle;
