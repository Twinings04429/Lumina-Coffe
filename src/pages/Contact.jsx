import React from "react";
import { Mail, Phone, MapPin } from "lucide-react"; // Ikon dari Lucide React

function Contact() {
    return (
        <div className="min-h-screen bg-[#2D1E15] text-black flex items-center justify-center p-8">
            <div className="bg-[#D1D1D1] w-full max-w-4xl p-8 rounded-3xl shadow-lg flex flex-col md:flex-row">

                {/* Bagian Informasi Kontak */}
                <div className="flex-1 space-y-6 text-lg">
                    <h1 className="text-3xl font-bold text-center text-black">Contact Us</h1>

                    {/* Email */}
                    <div className="flex items-center gap-3">
                        <Mail size={24} />
                        <a href="mailto:LuminaCoffee2025@gmail.com" className="underline font-medium">
                            LuminaCoffee2025@gmail.com
                        </a>
                    </div>

                    {/* Telepon */}
                    <div className="flex items-center gap-3">
                        <Phone size={24} />
                        <p>+62 - 111 - 222 - 1212</p>
                    </div>

                    {/* Alamat */}
                    <div className="flex items-center gap-3">
                        <MapPin size={24} />
                        <p>
                            Jl. Sriwijaya No. 1, Komp. Pelita, <br />
                            Nagoya, Batam 29444, Kepulauan Riau, Indonesia
                        </p>
                    </div>
                </div>

                {/* Formulir Kontak */}
                <div className="flex-1 mt-6 md:mt-0">
                    <form className="space-y-4">
                        <input type="text" placeholder="YOUR NAME" className="w-full p-3 bg-[#3A241D] text-white rounded-md" />
                        <input type="email" placeholder="EMAIL ADDRESS" className="w-full p-3 bg-[#3A241D] text-white rounded-md" />
                        <input type="tel" placeholder="TELEPHONE NUMBER" className="w-full p-3 bg-[#3A241D] text-white rounded-md" />
                        <textarea placeholder="YOUR MESSAGE" className="w-full p-3 bg-[#3A241D] text-white rounded-md h-32"></textarea>
                        <button className="bg-[#3A241D] text-white px-6 py-2 rounded-md w-full font-bold hover:bg-[#2D1E15] transition">
                            SEND MESSAGE
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
