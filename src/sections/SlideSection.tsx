import React from 'react';
interface Props {}
const SlideSection: React.FC<Props> = ({}) => {
  return (
    <div className="relative h-screen w-full bg-cover flex items-center text-white justify-center flex-col" style={{
        backgroundImage: 'url("/images/bg-couple.webp")'
    }}>
    
      <img data-aos="fade-up" src="/images/ai.png" className="w-1/2 -ml-5"></img>
      <div data-aos="fade-up" className="flex justify-center flex-col items-center mt-4">
        <h1 data-aos="fade-up" className="text-4xl font-black tracking-wider">Ayu & Ilham</h1>
          <h1 data-aos="fade-up" className="text-2xl">23.07.2021</h1>
        </div>
    </div>
    )
}

export default SlideSection;