import { useState } from 'react';
import styles from '../styles/header.module.scss';
import classNames from 'classnames/bind';

console.log(styles); //header: "header_header__H99PI"
//css module: [파일이름]_[클래스 이름]__[해시값] 형태로 자동으로 만들어서 컴포넌트 스타일 클래스 이름이 중첩되는 현상을 방지해 주는 기술

const cn = classNames.bind(styles); //this의 범위를 styles로 바꾸기
const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={cn('header')}>
      <button type="button" className={cn('red', { isActive })}>
        {/* 참일 때 활성화 */}
        로그인
      </button>
      <button type="button">회원가입</button>
      <button type="button" onClick={() => setIsActive(!isActive)}>
        toggle
      </button>
    </div>
  );
};

export default Header;
