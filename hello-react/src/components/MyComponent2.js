import PropTypes from 'prop-types';

const MyComponent2 = ({ name, favNum, children }) => {
  // 함수형 컴포넌트
  //const { name, favNum, children } = props;
  return (
    <>
      <div>나의 두 번째 컴포넌트</div>
      <div>이름: {name}</div>
      <div>좋아하는 숫자: {favNum}</div>
      <div>내용: {children} </div>
    </>
  );
};

MyComponent2.defaultProps = {
  name: '(기본이름)',
};

MyComponent2.propTypes = {
  favNum: PropTypes.number.isRequired,
};
export default MyComponent2;
