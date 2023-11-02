import { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
  static defaultProps = {
    // 기본값 설정하기
    name: '(이름 없음)',
  };

  static propTypes = {
    // 자료형 설정
    favNum: PropTypes.number.isRequired,
  };

  render() {
    // 클래스형 컴포넌트
    // const props = this.props;
    const { name, children, favNum } = this.props; // 비구조화 할당
    //태그 안쪽의 내용은 children 속성에 담긴다.
    //props의 값들은 읽기 전용이다.수정X
    return (
      <>
        <div> 나의 첫 번째 컴포넌트 </div>
        <div> {name}님 반갑습니다. </div>
        <div> 내용은: {children} </div>
        <div> 좋아하는 숫자: {favNum} </div>
      </>
    );
  }
}

// MyComponent.defaultProps = {
//   // 기본값 설정하기
//   name: '(이름 없음)',
// };
//  MyComponent.propTypes = {
//     // 자료형 설정
//     favNum: PropTypes.number.isRequired,
// };

export default MyComponent;
