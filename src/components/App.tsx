import WrapperContainer from './WrapperContainer/WrapperContainer';
import MotionCard from './MotionCard/MotionCard';
import MotionCursor from './MotionCursor/MotionCursor';
import Footer from './Footer/Footer';

import '../assets/App.css';

function App() {
  return (
    <>
      <MotionCursor />
      <WrapperContainer>
        <div className="flex flex-1 items-center justify-center">
          <MotionCard />
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <Footer />
        </div>
      </WrapperContainer>
    </>
  );
}

export default App;
