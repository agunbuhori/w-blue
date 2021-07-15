function StorySection() {
    return (
        <div className="px-4 py-8" style={{backgroundColor:'#010a1a'}}>
            <h1 className="text-4xl text-gold text-center primary-font font-bold">Love Story</h1>

            <div className="text-white mt-10">
                <div className="overflow-hidden" style={{borderRadius: '40px'}}>
                    <img src="/images/story_1.png" className="w-full"/>
                </div>
                <h2 className="font-bold text-xl my-2">Engagement (15 Mei 2021)</h2>
                <p className="text-white">Tepat di waktu yang tepat pula. Mampu dan bisa sampai pembuktian yang nyata didalam tahap yang lebih untuk bisa berkomitmen aaling menjaga hingga waktunya hari besar nanti tiba. Untuk Kita, Aku, dan Kamu. Akad nikah (23 juli 2021)</p>
                
                <div className="border-b-2 w-full my-8" style={{borderColor: "#ffd0a8"}}/>

                <div className="overflow-hidden" style={{borderRadius: '40px'}}>
                    <img src="/images/story_2.png" className="w-full"/>
                </div>
                <h2 className="font-bold text-xl my-2 text-right">Seperti titik di ujung kalimat. Denganmu pencarianku tamat.</h2>
                <p className="text-white text-right">
                Ya, hari ini. Hari Besar. Hari terbahagia  hari kita telah tiba dan kita telah benar-benar sampai pada titik yang dituju setiap orang yang bermaksud untuk beribadah dan menyempurnakan imannya. Alhamdulillah semoga hati ini semakin kuat menjaga, menegakkan dada untuk bisa menjadi seorang imam dan pemimpin bagi istri dan anaknya kelak, serta pandai menjadi istri yang senantiasa menjaga kehormatan dan kepercayaan suaminya. Aamiin Ya allah YaRabb
                </p>
            </div>
        </div>
    )
}


export default StorySection;