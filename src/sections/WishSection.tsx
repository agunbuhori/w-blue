function WishSection() {
    return (
        <section className="hello px-4 py-16" style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/texture.jpg)`
          }}>
            <h1 className="text-4xl text-center font-bold mb-10 primary-font">Wedding Wish</h1>

            <div className="mb-2">
                <label className="font-semibold ">Your Name</label>
                <input className="px-3 py-2 w-full mt-2 rounded border-2 border-gray-400"/>
            </div>
            
            <div className="mb-2">
                <label className="font-semibold ">Your Message</label>
                <textarea className="px-3 py-2 w-full mt-2 rounded border-2 border-gray-400"></textarea>
            </div>

            <button className="p-3 rounded bg-black w-full text-white font-bold mb-10">SEND</button>

            <div className="border-4 border-dotted border-gray-400 rounded-lg p-4 mb-2">
                <h4 className="font-semibold">Ibu Karin</h4>
                <p className="">Bayar woy</p>
                <p className="text-sm text-gray-600">12 Juli</p>
            </div>

        </section>
    )
}

export default WishSection;