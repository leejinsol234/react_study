import { useState } from 'react';

const Message = () => {
  const [messages, setMessages] = useState(['메세지1', '메세지2', '메세지3']);

  const lis = messages.map((m, i) => <li key={i}>{m}</li>);
  const handleClick = () => {
    //messages.push('메세지4');
    // 주소값이 달라지지 않아(얕은 비교) 배열은 추가되었으나 추가된 값은 보이지 않음.(리렌더링X)
    // 주소값이 달라져야지만 리렌더링이 됨.(달라진 값이 보일 수 있음)
    // 즉, 반환값을 새로운 배열 객체로 만들어주는 생성자(concat)를 사용해야 한다.
    setMessages(messages.concat('메세지4'));
  };

  return (
    <>
      <ul>{lis}</ul>
      <button type="button" onClick={handleClick}>
        메세지4 추가
      </button>
    </>
  );
};

export default Message;
