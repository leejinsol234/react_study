import { useReducer } from 'react';

const INCREASE = 'counter/increase'; //상수
const DECREASE = 'counter/decrease'; //상수

const increase = () => ({ type: INCREASE }); //액션 함수
const decrease = () => ({ type: DECREASE }); //액션 함수

function reducer(state, action) {
  //reducer 함수,state는 초기상태,action은 들어올 액션함수(increase,decrease)

  switch (action.type) {
    case INCREASE: //증가 액션
      return { number: state.number + 1 };
    case DECREASE: //감소 액션
      return { number: state.number - 1 };
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { number: 0 });
  //state: 현재 상태값, dispatch: 액션을 발생시키는 함수, reduce: 실행할 함수,{ number: 0 }는 초기값
  return (
    <>
      <h1>{state.number}</h1>
      <button type="button" onClick={() => dispatch(increase())}>
        +1
      </button>
      <button type="button" onClick={() => dispatch(decrease())}>
        -1
      </button>
    </>
  );
};

export default Counter;
