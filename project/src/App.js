import SassComponent from './components/SassComponent';

// import ErrorBoundary from './components/ErrorBoundary';
// import LifeCycle from './components/LifeCycle';
// import { useState } from 'react';

const App = () => {
  return <SassComponent />;
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
