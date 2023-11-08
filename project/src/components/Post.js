import axios from 'axios';
import { useState, useEffect } from 'react';

const Posts = () => {
  //  const [number, setNumber] = useState(0);
  //  const [refresh, setRefresh] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    //if (refresh) {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        // console.log(data);
        // setRefresh(false);
        setPosts(res.data); //데이터 업데이트
      })
      .catch((err) => console.log(err));
    return () => {
      //뒷정리 함수 -> 업데이트 전, 언마운트 전에 호출
      console.log('뒷정리 함수 호출');
    };
    //}
  }, []); //[]안이 호출의 기준, [] 비어있으면 처음에만 로딩됨.

  return (
    <>
      {/* <h1>{number}</h1>
      <button type="button" onClick={() => setNumber(number + 1)}>
        +1
      </button>
      <button type="button" onClick={() => setRefresh(true)}>
        새로고침
      </button> */}

      <ul>
        {posts.length > 0 && posts.map((p) => <li key={p.id}>{p.title}</li>)}
      </ul>
    </>
  );
};
export default Posts;
