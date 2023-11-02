import { Fragment } from 'react';
import './App.css';
import logo from './logo.svg';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <MyComponent>
      {/* 속성에 숫자,논리값이나 함수를 입력할 때는 중괄호 안에 작성한다. 문자열만 따옴표안에 작성! */}
      <h1>태그 안쪽 내용</h1>
    </MyComponent>
  );
}

export default App;
