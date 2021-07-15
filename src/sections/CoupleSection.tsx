import data from "../data";

function CoupleSection() {
    return (
      <section className="hello px-4 py-16 flex items-center justify-center bg-no-repeat flex-col bg-cover text-center bg-fixed" style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/background.png)`
        }}>
          <h1 className="text-2xl text-white font-bold">The Wedding Of</h1>
          <span className="text-white text-lg italic">The pleasure of your company is requested</span>
  
          <div style={{borderRadius: '40px'}} className="w-52 h-52 overflow-hidden mt-20">
            <img src="/images/ilham.png" className="w-full"/>
          </div>
          <h2 className="text-gold text-3xl mt-4 font-bold primary-font">{data.man_name}</h2>
          <h2 className="text-white text-md">{data.man_parent}</h2>
  
          <h1 className="primary-font my-5 text-gold" style={{fontSize: '60pt'}}>&</h1>
          
          <div style={{borderRadius: '40px'}} className="w-52 h-52 overflow-hidden">
            <img src="/images/ayu.png" className="w-full"/>
          </div>
  
          <h2 className="text-gold text-3xl mt-4 font-bold primary-font">{data.woman_name}</h2>
          <h2 className="text-white text-md">{data.woman_parent}</h2>
      </section>
    );
}

export default CoupleSection;