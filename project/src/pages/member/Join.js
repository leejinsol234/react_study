import { Helmet } from 'react-helmet-async';
//import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Join = () => {
  const navigate = useNavigate();
  const isLogin = false;
  if (!isLogin) {
    //return <Navigate to="/login" replace={true}/>;
    // replace={true} 히스토리 기록을 사용하지 않을 때
    navigate('/login', { replace: true });
    //{replace:true} 히스토리 기록 사용X

    /*
    navigate(-1) -> 뒤로 1단계 이동 history.back();
    navigate(1) -> 앞으로 1단계 이동 history.forward();
    */
  }

  return (
    <>
      <Helmet>
        <title>회원가입</title>
      </Helmet>

      <h1>회원가입 페이지</h1>
    </>
  );
};

export default Join;
