import React from "react";
import latar from "../assets/resource/latar.jpg"; // Import gambar dengan benar

function About() {
    return (
        <div className="min-h-screen bg-[#2D1E15] flex items-center justify-center p-8">
            <div className="bg-[#D1D1D1] w-full max-w-4xl p-8 rounded-3xl shadow-lg flex flex-col md:flex-row items-center">

                {/* Bagian Teks */}
                <div className="flex-1 text-black p-6">
                    <h1 className="text-3xl font-bold mb-4">Cerita Kami</h1>
                    <p className="text-lg leading-relaxed">
                        Di balik gemerlap gedung kota, Lumina Cafe hadir sebagai oasis cahaya.
                        Bukan sekadar tempat minum kopi, kami adalah manifestasi mimpi,
                        perpaduan rasa dan kehangatan, tempat jiwa-jiwa bertemu.
                    </p>
                </div>

                {/* Gambar */}
                <div className="flex-1">
                    <img src={latar} alt="Lumina Cafe" className="rounded-3xl shadow-lg w-full h-auto" />
                </div>

            </div>
        </div>
    );
}

export default About;
