import LoginContainer from './containers/member/LoginContainer';

const App = () => {
  return <LoginContainer />;
};
// const App = () => {
//   const [visible, setVisibel] = useState(true);
//   const handelClick = () => {
//     setVisibel(!visible); //!으로 toggle기능
//   };
//   return (
//     <>
//       <ErrorBoundary>
//         {visible && <LifiCycle color="orange" number={10} />}
//         {/* && 연산으로 visible이 true이면 2항이 실행되도록*/}
//         <button type="button" onClick={handelClick}>
//           toggle
//         </button>
//       </ErrorBoundary>
//     </>
//   );
// };

export default App;
