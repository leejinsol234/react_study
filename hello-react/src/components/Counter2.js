import { useState } from 'react';

//Hook을 사용하는 함수형 컴포넌트
const Counter2 = () => {
  const [number, setNumber] = useState(0);
  // 0번째 요소 number에 초기값을 0으로 설정

  // const number = state[0]; 초기값
  // const setNumber = state[1]; 초기값을 바꿀 수 있는 메서드

  return (
    <div>
      <h1>{number}</h1>
      <button
        type="button"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +1
      </button>
    </div>
  );
};

// 성능상 비교를 할 때(변화를 감지할 때) 얕은 비교(주소값)를 한다.
export default Counter2;
