import './App.css';
import './index.css';

import SlideSection from './sections/SlideSection';
import AyahSection from './sections/AyahSection';
import CoupleSection from './sections/CoupleSection';
import HeloSection from './sections/HeloSection';
import SaveTheDateSection from './sections/SaveTheDateSection';
import StorySection from './sections/StorySection';
import GallerySection from './sections/GallerySection';
import ScheduleSection from './sections/ScheduleSection';
import WishSection from './sections/WishSection';
import ProtocolSection from './sections/ProtocolSection';

function App() {
  return (
    <div className="container">
      <SlideSection/>
      <AyahSection/>
      <CoupleSection/>
      <SaveTheDateSection/>
      <StorySection/>
      <GallerySection/>
      <ScheduleSection/>
      <ProtocolSection/>
      <WishSection/>
    </div>
  );
}

export default App;
