import { useTranslation } from 'react-i18next';
import { TitleStyle } from '../../components/commons/TitleStyle';
import { InputText } from '../../components/commons/InputStyle';

//여러 개를 import를 가져올 때는 {}안에 작성한다.
//default로 내보내진 컴포넌트는 이름을 바꿔서 가져올 수 있지만
//아니면 이름을 바꿔서 가져올 수 없다.
//단, as로 별칭을 만들어 사용할 수 있다.
//{ num1 as n1, num2 }

//styled.h1이 tagged함수이다.
//function h1(...args){
//   args로(매개변수로) ``안의 속성들이 호출된다
//}

// const darkModeCss = css`
//   background: #000;
//   color: #fff;
// `;

// const TitleStyle = styled.h1`
//   border-bottom: 2px solid #000;
//   font-size: 1.75rem;
//   padding-bottom: 10px;
//   margin-bottom: 20px;
//   color: ${(props) => props.color || 'black'};
//   span {
//     border: 2px solid red;
//   }
//   ${(props) => props.theme === 'dark' && darkModeCss}
// `; //함수를 정의하면 내부에서 props값이 넘어온다.

const LoginForm = ({ onSubmit, onChange, form, error }) => {
  /* 컨테이너에서 props를 받아와서 프레젠테이션 처리 */
  const { t } = useTranslation();
  // let num = 10; // rendering 할 때마다 10으로 초기화됨
  // const [language, setLanguage] = useState('한국어');
  // const handleLanguage = (e) => {
  //   // console.log(e);
  //   // console.log(this); //undefined
  //   // console.log('currentTarget', e.currentTarget);
  //   // console.log('target', e.target); //이벤트가 적용된 곳

  //   const el = e.currentTarget; //이벤트가 적용된 곳
  //   const lang = el.dataset.lang;
  //   i18n.changeLanguage(lang);
  //   setLanguage(lang === 'ko' ? '한국어' : 'English');
  // };

  // input에 ref 달기
  // let refUserid;
  // useEffect(() => {
  //   //rendering 직후, 갱신 직후에 실행됨. rendering 이후에 할 공통 작업
  //   refUserid.focus();
  // }, [refUserid]);

  //createRef를 통한 ref 설정
  //let refUserid = React.createRef(); // 클래스형 컴포넌트, 함수형 컴포넌트 둘 다 사용 가능
  // let refUserid = useRef(); // 함수형 컴포넌트에서만 사용
  // let refTitle = useRef();

  // let refCount = useRef(10); // rendering과 상관없이 사용 가능한 지역변수

  // useEffect(() => {
  //   //current 속성을 통해서 DOM에 접근
  //   refUserid.current.focus();
  //   refTitle.current.printInfo('메세지'); //컴포넌트의 속성에 접근
  // }, []);

  // const handleClick = () => {
  //   console.log('현재 값:', refCount.current);
  //   refCount.current++;
  //   console.log('변경 값:', refCount.current);
  // };

  return (
    <>
      <TitleStyle>{t('로그인')}</TitleStyle>

      {/* <div>
        {t('현재언어')}: {language}
      </div> */}
      <form onSubmit={onSubmit}>
        {/* onSubmit, onChange 는 LoginContainer의 속성값에서 받아온다. */}
        {/* input에 ref 달기
        <input
          type="text"
          ref={(ref) => (refUserid = ref)}
          name="userId"
          placeholder={t('아이디')}
        /> */}

        {/* <input
          type="text"
          name="userId"
          placeholder={t('아이디')}
          ref={refUserid}
        /> */}
        <InputText
          type="text"
          name="email"
          placeholder={t('이메일')}
          onChange={onChange}
          value={form.email}
        />
        {error.email && <div>{error.email}</div>}
        <InputText
          type="password"
          name="password"
          placeholder={t('비밀번호')}
          onChange={onChange}
          value={form.password}
        />
        {error.password && <div>{error.password}</div>}
        <button type="submit">{t('로그인')}</button>
      </form>
      {/* <button type="button" onClick={handleLanguage} data-lang="ko">
        한국어
      </button>
      <button type="button" onClick={handleLanguage} data-lang="en">
        English
      </button> */}

      {/* <button type="button" onClick={handleClick}>
        +1
      </button> */}
    </>
  );
};

export default LoginForm;
