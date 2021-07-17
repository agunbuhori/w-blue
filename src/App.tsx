import './App.css';
import './index.css';
import React, { useEffect } from 'react'

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

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

declare module 'aos';

function App() {

     useEffect(() => {
         // your post layout code (or 'effect') here.
         AOS.init()
     },
     // array of variables that can trigger an update if they change. Pass an
     // an empty array if you just want to run it once after component mounted. 
     [])
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
