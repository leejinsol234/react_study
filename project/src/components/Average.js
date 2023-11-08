import React, { useState, useMemo, useCallback } from 'react';

const getAverage = (numbers) => {
  console.log('평균 구하는 함수 호출');
  const total = numbers.reduce((a, b) => a + b, 0);
  const avg = Math.round((total / numbers.length) * 10) / 10;
  return avg;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState(0);

  const handleChange = useCallback((e) => setNumber(e.currentTarget.value), []);
  //[] -> 처음에 마운트 될 때 1번만 생성됨
  const handleClick = useCallback(
    () => setList(list.concat(Number(number))),
    [list, number], // []안에는 상태값에 영향을 받는 함수를 기준이 되도록 입력한다.
  );
  //함수가 정해진 기준에서만 캐싱되도록 하기 위해 useCallback을 사용한다.

  const avg = useMemo(() => getAverage(list), [list]);
  //[list]가 바뀔 때만 getAverage(list)가 호출된다.

  return (
    <>
      <input type="number" onChange={handleChange} />
      <button type="button" onClick={handleClick}>
        평균 구하기
      </button>
      <ul>
        {list.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
      <div>평균:{avg}</div>
    </>
  );
};

export default React.memo(Average);
