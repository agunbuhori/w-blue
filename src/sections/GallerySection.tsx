function GallerySection() {
    return (
        <section className="hello px-4 py-16 flex items-center justify-center bg-no-repeat flex-col bg-cover text-center" style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/texture.jpg)`
          }}>

            <h1 className="text-2xl font-bold">Pict Of Us</h1>
            <h1 className="text-lg italic">The heart knows when the search is over.</h1>

            <div className="grid grid-cols-2 gap-2 mt-10">
                <div className="">
                    <img className="w-full mb-2" src="/images/gallery/jawa 3.jpg"/>
                    <img className="w-full mb-2" src="/images/gallery/jawa 2.jpg"/>
                    <img className="w-full mb-2" src="/images/gallery/slide 4.png"/>
                    <img className="w-full mb-2" src="/images/gallery/slide 6.jpg"/>
                    <img className="w-full mb-2" src="/images/gallery/slide 8.jpg"/>

                </div>
                
                <div className="">
                    <img className="w-full mb-2" src="/images/gallery/slide 3.png"/>
                    <img className="w-full mb-2" src="/images/gallery/slide 2.png"/>
                    <img className="w-full mb-2" src="/images/gallery/slide 7.jpg"/>
                    <img className="w-full mb-2" src="/images/gallery/slide 5.png"/>
                    <img className="w-full mb-2" src="/images/gallery/slide 9.jpg"/>
                </div>
            </div>
        </section>
    );
}

export default GallerySection;