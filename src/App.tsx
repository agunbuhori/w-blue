import './App.css';
import './index.css';
import CoupleSection from './sections/CoupleSection';
import HeloSection from './sections/HeloSection';
import SaveTheDateSection from './sections/SaveTheDateSection';
import StorySection from './sections/StorySection';
import GallerySection from './sections/GallerySection';
function App() {
  return (
    <div className="container">
      <HeloSection/>
      <CoupleSection/>
      <SaveTheDateSection/>
      <StorySection/>
      <GallerySection/>
    </div>
  );
}

export default App;
