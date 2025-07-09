import WrapperContainer from './WrapperContainer/WrapperContainer';
import MotionCard from './MotionCard/MotionCard';
import MotionCursor from './MotionCursor/MotionCursor';

import '../assets/App.css';

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
