import { Component } from 'react';

class Counter extends Component {
  // 부모 요소에서 넘어오는 props을 이용하지 않을 때는 생성자로 받아오지 않아도 된다.
  // 부모 요소에서 넘어오는 props가 있을 때는 아래와 같이 생성자로 부모 요소에서 props를 받아온다.
  //   constructor(props) {
  //     super(props);
  //   }

  // 초기값 0
  state = {
    number: 0,
  };

  render() {
    //상태값을 감지
    const { number } = this.state;

    return (
      <div>
        <h1>{number}</h1>
        <button
          type="button"
          onClick={() => {
            this.setState({ number: number + 1 });
            //상태값이 달라지면 render()가 호출되어 실제돔이 재구성됨(리렌더링).
            //즉, 상태값의 변동에 따라 돔이 달라진다.
          }}
        >
          +1
        </button>
        <button
          type="button"
          onClick={() => {
            this.setState({ number: number - 1 });
          }}
        >
          -1
        </button>
      </div>
    );
  }
}

export default Counter;
