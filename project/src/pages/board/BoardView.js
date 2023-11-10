import { useParams, useLocation, useSearchParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const BoardView = () => {
  //const params = useParams();
  const { id } = useParams();
  // 비구조화 할당
  /*
  const location = useLocation();

  //쿼리스트링 값 조회하기
  const [searchParams, setSearchParams] = useSearchParams();
  const key = searchParams.get('key');
  const id2 = searchParams.get('id');
  console.log(key, id2);

  console.log(location.search); //쿼리스트링 값
  */
  return (
    <>
      <h1>게시글 보기</h1>
      <h2>게시글 번호:{id}</h2>
      <hr />
      <Outlet />
    </>
  );
};

export default BoardView;
