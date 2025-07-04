import WrapperContainer from './components/WrapperContainer/WrapperContainer';
import MotionCard from './components/MotionCard/MotionCard';
import MotionCursor from './components/MotionCursor/MotionCursor';

import './assets/App.css';

function App() {
  return (
    <>
      <MotionCursor />
      <WrapperContainer>
        <MotionCard />
      </WrapperContainer>
    </>
  );
}

export default App;
