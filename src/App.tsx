import './App.css';
import './index.css';
import CoupleSection from './sections/CoupleSection';
import HeloSection from './sections/HeloSection';
import SaveTheDateSection from './sections/SaveTheDateSection';

function App() {
  return (
    <div className="container">
      <HeloSection/>
      <CoupleSection/>
      <SaveTheDateSection/>
    </div>
  );
}

export default App;
