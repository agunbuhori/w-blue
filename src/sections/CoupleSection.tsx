import data from "../data";

function CoupleSection() {
    return (
      <section className="hello px-4 py-16 flex items-center justify-center bg-no-repeat flex-col bg-cover text-center bg-fixed relative" style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg-couple.webp)`
        }}>
          <h1 data-aos="fade-up" className="text-2xl text-white font-bold">The Wedding Of</h1>
          <span data-aos="fade-up" className="text-white text-lg">The pleasure of your company is requested</span>
  
          <div data-aos="fade-up" style={{borderRadius: '40px'}} className="w-40 h-40 overflow-hidden mt-20">
            <img src="/images/ilham.png" className="w-full"/>
          </div>
          <h2 data-aos="fade-up" className="text-gold text-xl mt-4 font-bold primary-font">{data.man_name}</h2>
          <h2 data-aos="fade-up" className="text-white text-md">{data.man_parent}</h2>
  
          <h1 data-aos="fade-up" className="primary-font my-5 text-gold" style={{fontSize: '60pt'}}>&</h1>
          
          <div data-aos="fade-up" style={{borderRadius: '40px'}} className="w-40 h-40 overflow-hidden">
            <img src="/images/ayu.png" className="w-full"/>
          </div>
  
          <h2 data-aos="fade-up" className="text-gold text-xl mt-4 font-bold primary-font">{data.woman_name}</h2>
          <h2 data-aos="fade-up" className="text-white text-md">{data.woman_parent}</h2>
         
      </section>
    );
}

export default CoupleSection;