import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-[#2D1E15] text-white py-10 px-6 md:px-16">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                {/* Layanan Kami */}
                <div>
                    <h2 className="text-lg font-bold mb-2">Layanan Kami</h2>
                    <ul className="text-gray-300 text-sm space-y-1">
                        <li>Jelajahi Pilihan Makanan & Minuman</li>
                        <li>Layanan katering untuk acara spesial</li>
                        <li>Pelayanan profesional dari staff kami</li>
                        <li>Sewa tempat eksklusif dan nyaman</li>
                    </ul>
                </div>

                {/* Product */}
                <div>
                    <h2 className="text-lg font-bold mb-2">Product</h2>
                    <ul className="text-gray-300 text-sm space-y-1">
                        <li>Kopi Best Seller</li>
                        <li>Daging Wahyu Premium</li>
                        <li>Aneka Kue</li>
                    </ul>
                </div>

                {/* Social Media */}
                <div className="flex flex-col items-center md:items-start">
                    <h2 className="text-lg font-bold mb-4">SOCIAL MEDIA</h2>
                    <div className="flex space-x-8">
                        <div className="bg-white p-4 rounded-full border-4 border-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:rotate-3">
                            <FaFacebookF className="text-[#2D1E15] text-4xl" />
                        </div>
                        <div className="bg-white p-4 rounded-full border-4 border-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:rotate-3">
                            <FaInstagram className="text-[#2D1E15] text-4xl" />
                        </div>
                        <div className="bg-white p-4 rounded-full border-4 border-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:rotate-3">
                            <FaTwitter className="text-[#2D1E15] text-4xl" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Garis Pemisah */}
            <div className="border-t-2 border-white mt-6"></div>

            {/* Copyright */}
            <div className="text-center text-gray-400 text-sm mt-4">
                <p>&copy; 2025 Lumina Coffee</p>
            </div>
        </footer>
    );
}

export default Footer;
