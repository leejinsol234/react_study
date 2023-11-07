import { Component } from 'react';

class LifiCycle extends Component {
  state = {
    color: 'black',
    number: 0,
  };

  constructor(props) {
    //constructor는 초기값을 설정할 때 사용한다.
    //부모쪽에서 설정한 속성값을 받는다.
    super(props);
    //부모쪽에서 가져올 속성값이 없으면 설정할 기본값을 || 연산자로 넣는다.
    //this.state.color = props.color || 'black';
    //this.state.number = props.number || 0;
  }

  //   static getDerivedStateFromProps(nextProps, prevState) {
  //     //마운트 단계, 업데이트 단계에서 render함수 호출 전에
  //     if (nextProps.color !== prevState.color) {
  //       return { color: nextProps.color };
  //     }
  //     return null;
  //   }

  //   shouldComponentUpdate(nextProps, nextState) {
  //     //nextState -> setState를 통해서 변경하고자 하는 값
  //     //this.state -> 현재 상태값
  //     if (nextState.number % 4 === 0) {
  //       console.log('렌더링X');

  //       return false;
  //     }
  //     console.log('렌더링O');
  //     return true;
  //   }

  componentDidMount() {
    //최초 한 번만 호출됨
    console.log('render()호출 후에 DOM 구성 완료 시 호출 - componentDidMount');
    //이벤트 바인딩, DOM에 직접 접근해야 하는 경우
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    //업데이트 전

    return 'snapshot';
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    //업데이트 후
    //현재 상태는 this.state로 조회
    //그 전 상태는 prevState로 조회
    console.log('현재 상태: ', this.state);
    console.log('기존 상태: ', prevState);
    console.log('snapshot: ', snapshot);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount()');
  }

  chageColor = (e) => {
    const color = e.currentTarget.value;
    this.setState({ ...this.state, color }); //변수명과 속성명이 동일(color:color)하면 하나만 작성해도 됨
  };
  render() {
    this.state.missing.value = 10;
    const { color, number } = this.state;
    return (
      <div>
        <div
          style={{
            //JSX에서 JS 문법을 적용하는 첫 번째 중괄호, 속성을 담는 두 번째 중괄호
            width: 300,
            height: 300,
            background: color,
          }}
        ></div>
        <input type="color" onChange={this.chageColor} />
        <hr />
        <h1>{number}</h1>
        <button
          type="button"
          onClick={() => this.setState({ ...this.state, number: number + 1 })}
        >
          +1
        </button>
        <button
          type="button"
          onClick={() => this.setState({ ...this.state, number: number - 1 })}
        >
          -1
        </button>
      </div>
    );
  }
}

export default LifiCycle;
