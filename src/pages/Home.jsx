import React from "react";
import AnimatedPage from "../components/layout/AnimatedPage";
import coffeeImage from "../assets/resource/kopi.png";
import "@fontsource/playfair-display";

function Home() {
    return (
        <AnimatedPage>
            <div className="flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-20 bg-[#2D1E15] min-h-screen text-white font-sans">
                {/* Bagian Kiri - Teks */}
                <div className="md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight font-['Playfair_Display'] tracking-wide">
                        Ruang Hangat <br /> Untuk Jiwa <br /> Yang Tenang
                    </h1>

                    {/* Garis Putih yang Menyesuaikan Panjang Teks */}
                    <div className="h-1 bg-white my-6 w-3/4 md:w-[80%]"></div>

                    <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-xl font-light leading-relaxed text-center md:text-left">
                        "Di <span className='font-semibold'>Lumina Coffee</span>, kami percaya bahwa kopi adalah lebih dari sekadar kafein.
                        Ini tentang ritual, momen, dan cerita yang terjalin di setiap tegukan.
                        Mari kita mulai perjalanan rasa ini bersama-sama."
                    </p>
                </div>

                {/* Bagian Kanan - Gambar */}
                <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
                    <img
                        src={coffeeImage}
                        alt="Cangkir Kopi"
                        className="w-60 md:w-[400px] hover:scale-105 transition-transform duration-500 ease-in-out rounded-lg"
                    />
                </div>
            </div>
        </AnimatedPage>
    );
}

export default Home;