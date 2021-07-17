import './App.css';
import './index.css';
import React, { useEffect, useState, useLayoutEffect } from 'react'

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

    const [music, setMusic] = useState(false);
    const [open, setOpen] = useState(false);

    const [msc] = useState(new Audio('/music.mp3'));

     useEffect(() => {
         // your post layout code (or 'effect') here.
         AOS.init();
        
     },
     // array of variables that can trigger an update if they change. Pass an
     // an empty array if you just want to run it once after component mounted. 
     [music, msc]);

     useLayoutEffect(() => {
        if (music) { 
          msc.play();
        } else {
          msc.pause();
        }

        
      }, [msc, music, open])

    
  return (
    <div className="container relative">
      <SlideSection/>
      <AyahSection/>
      <CoupleSection/>
      <SaveTheDateSection/>
      <ScheduleSection/>
      <GallerySection/>
      <StorySection/>
      <ProtocolSection/>
      <WishSection/>
      <button onClick={() => setMusic(! music)} className="fixed bottom-5 right-5 rounded-full w-14 h-14 flex items-center justify-center" style={{backgroundColor: ' #ffd0a8'}}>
        
        {
          ! music 
            ?
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
            </svg>
        }

      </button>
      
      <div className="fixed top-0 left-0 w-full h-full bg-red-200 zzz"></div>
    </div>
  );
}

export default App;
