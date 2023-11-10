import Login from './pages/member/Login.js';
import Join from './pages/member/Join.js';
import { Routes, Route } from 'react-router-dom';
import CommonLayout from './layouts/CommonLayout.js';
import Main from './pages/Main.js';
import NotFound from './pages/NotFound.js';

// import ErrorBoundary from './components/ErrorBoundary';
// import LifeCycle from './components/LifeCycle';
// import { useState } from 'react';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CommonLayout />}>
        <Route index element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

/*
const App = () => {
  const [visible, setVisibel] = useState(true);
  const handelClick = () => {
    setVisibel(!visible); //!으로 toggle기능
  };
  return (
    <>
      <ErrorBoundary>
        {visible && <LifeCycle color="orange" number={10} />}
        // && 연산으로 visible이 true이면 2항이 실행되도록
        <button type="button" onClick={handelClick}>
          toggle
        </button>
      </ErrorBoundary>
    </>
  );
};
*/

export default App;
