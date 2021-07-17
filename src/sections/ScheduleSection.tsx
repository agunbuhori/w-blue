function ScheduleSection() {
    return (
        <section className="hello pt-16 flex items-center justify-center bg-no-repeat flex-col bg-contain text-center" style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg-event.webp)`
          }}>
                <div style={{backgroundColor: '#081122'}} className="w-full px-4 pb-16">
                    <h1 data-aos="fade-up" className="text-2xl text-white font-bold">It's Wedding Day</h1>
                    <h1 data-aos="fade-up" className="text-lg italic text-white mt-4 px-8">Here is to love, and laughter, and happily ever after.</h1>
                    
                    <img data-aos="fade-up" src="/images/div2.png" className="w-full mt-5 mb-4 -scale-y-100"/>
                    <h1 data-aos="fade-up" className="text-3xl text-white font-black leading-10">Friday,<br/> July 23<sup>rd</sup> 2021</h1>
                    <img data-aos="fade-down" src="/images/div1.png" className="w-full mt-5 mb-4 -scale-y-100"/>

                    <div className="w-full flex flex-col justify-center items-center">
                        <img data-aos="fade-left" src="/images/ring.png" className="w-20 mt-5"/>
                        <h1 data-aos="fade-right" className="text-gold text-4xl mt-4 font-bold primary-font mb-5">Syukuran Pernikahan</h1>
                        <h1 data-aos="fade-up" className="italic text-white text-xl px-8">Jalan Gadihu kediaman bapak Hi. Sunardi Semarang</h1>
                        <h1 data-aos="fade-down" className="italic text-white text-xl px-8">16:00 WITA</h1>
                    </div>

                    <div className="w-full flex flex-col justify-center items-center mt-10">
                        <img data-aos="fade-left" src="/images/location.png" className="w-20 mt-5"/>
                        <h1 data-aos="fade-right" className="text-gold text-4xl mt-4 font-bold primary-font mb-5">Location</h1>
                        <div data-aos="fade-up" className="rounded-xl overflow-hidden w-full">
                            <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.5747224583793!2d128.2024163147589!3d-3.683784997319686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNDEnMDEuNiJTIDEyOMKwMTInMTYuNiJF!5e0!3m2!1sen!2sid!4v1626461627124!5m2!1sen!2sid" height="400" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default ScheduleSection;