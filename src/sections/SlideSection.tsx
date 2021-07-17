import React from 'react';
import OwlCarousel from 'react-owl-carousel';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const slideImages = [
  'images/slide_2.jpg',
  'images/slide_3.jpg',
  'images/slide_4.jpg'
];

interface Props {

}

const SlideSection: React.FC<Props> = ({}) => {
  return (
    <div className="relative">
    
      <OwlCarousel items={1} animateOut='fadeOut' animateIn='fadeIn' className='owl-theme' dots={false} autoplay loop nav={false}>
          <div className='item'>
              <img src="/images/gallery/jawa 1.jpg"/>
          </div>

          <div className='item'>
              <img src="/images/gallery/jawa 3.jpg"/>
          </div>

      </OwlCarousel>
      
      <div className="w-full zzz" style={{
        background: '#010a1a',
        height: '100%',
        opacity: '0.77',
        backgroundSize: 'cover',
        position: 'absolute',
        backgroundPosition: 'bottom',
        top: '0'
      }}></div>

      <div className="w-full zzz" style={{
        backgroundImage: "url('/images/wave2.webp')",
        height: '200px',
        backgroundSize: 'cover',
        position: 'absolute',
        backgroundPosition: 'bottom',
        top: '0'
      }}></div>
      
      <div className="w-full zzz" style={{
        backgroundImage: "url('/images/wave1.webp')",
        height: '100px',
        backgroundSize: 'cover',

        transform: 'translateY(-100%)',
        position: 'absolute'
      }}></div>

      
      
    </div>
    )
}

export default SlideSection;