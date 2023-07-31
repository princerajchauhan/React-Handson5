
import ClickCounter from './Components/HighOrderComp/ClickCounter';
import HoverCounter from './Components/HighOrderComp/HoverCounter';
import PureComp from './Components/PureComponent/PureComp';

function App() {
  return (
    <>
      <PureComp />

      <div style={{ width: '80%', margin: '20px auto', boxShadow: '0 0 5px 0 black', padding: '20px', backgroundColor: 'lightgray' }}>
        <h1 style={{ color: 'purple' }}>High Order Component</h1>
        <p style={{ marginTop: '-15px', marginBottom: '20px' }}> - A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature. </p>
        <ClickCounter />
        <HoverCounter />
      </div>
    </>
  );
}

export default App;
