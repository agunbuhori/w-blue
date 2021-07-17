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
              <img className="h-full" src="/images/car1.jpg"/>
          </div>

          <div className='item'>
              <img className="h-full" src="/images/car2.jpg"/>
          </div>

      </OwlCarousel>
      
      <div className="w-full zzz text-white flex items-center justify-center flex-col" style={{
        background: 'rgba(1, 10, 26, 0.3)',
        height: '100%',
        backgroundSize: 'cover',
        position: 'absolute',
        backgroundPosition: 'bottom',
        top: '0'
      }}>
        <img data-aos="fade-up" src="/images/ai.png" className="mt-60" style={{width: '150px', transform: 'translateX(-10px)'}}/>
        <div data-aos="fade-up" className="flex justify-center flex-col items-center mt-4">
        <h1 data-aos="fade-up" className="text-2xl font-bold tracking-wider">Ayu & Ilham</h1>
          <h1 className="text-xl">23.07.2021</h1>
        </div>
      </div>
      
      <div className="w-full zzz" style={{
        backgroundImage: "url('/images/wave1.webp')",
        height: '140px',
        backgroundSize: 'cover',

        transform: 'translateY(-100%)',
        position: 'absolute'
      }}></div>

       <div className="w-full zzz" style={{
        backgroundImage: "url('/images/wave2.webp')",
        height: '80px',
        transform: 'translateY(-70%) rotate(180deg)',
        backgroundSize: 'cover',
          top: '0',
          backgroundPosition: 'bottom',
        position: 'absolute'
      }}></div>

      
      
    </div>
    )
}

export default SlideSection;