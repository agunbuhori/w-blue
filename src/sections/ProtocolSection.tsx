import data from "../data";

function ProtocolSection() {
    return (
      <section className="px-4 py-16 text-center">
          <h1 data-aos="fade-up" className="text-2xl text-center font-bold">Covid-19 Protocol</h1>
          <span data-aos="fade-up" className="text-lg italic">Please kindly follow the protocol</span>

          <div className="grid gap-4 mt-10">
              <div data-aos="fade-left" className="flex items-center justify-center flex-col">
                  <img className="w-1/3" src="/images/protocol/masker.png"/>
                  <span className="font-bold">Wear Mask</span>
              </div>
              <div data-aos="fade-right" className="flex items-center justify-center flex-col">
                  <img className="w-1/3" src="/images/protocol/suhu.png"/>
                  <span className="font-bold">Temprature Checking</span>
              </div>
              
              <div data-aos="fade-left" className="flex items-center justify-center flex-col">
                  <img className="w-1/3" src="/images/protocol/tangan.png"/>
                  <span className="font-bold">Hand Washing</span>
              </div>
              <div data-aos="fade-right" className="flex items-center justify-center flex-col">
                  <img className="w-1/3" src="/images/protocol/jarak.png"/>
                  <span className="font-bold">Social Distancing</span>
              </div>
              

          </div>
      </section>
    );
}

export default ProtocolSection;