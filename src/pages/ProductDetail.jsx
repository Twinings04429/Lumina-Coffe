import React from "react";
import { X } from "lucide-react"; // Ikon Close

function ProductDetail({ product, onClose }) {
    return (
        // Overlay Transparan
        <div className="fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-md z-50">
            {/* Modal Container */}
            <div className="bg-gray-900 rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-center max-w-3xl relative">

                {/* Tombol Close */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-white hover:text-red-500 transition"
                >
                    <X size={24} />
                </button>

                {/* Gambar Produk */}
                <div className="w-full md:w-1/3 flex justify-center">
                    <img src={product.image} alt={product.name} className="w-48 h-48 rounded-lg object-cover shadow-md" />
                </div>

                {/* Detail Produk */}
                <div className="flex-1 text-center md:text-left px-6">
                    <h2 className="text-3xl font-bold text-yellow-500">{product.name}</h2>
                    <p className="text-gray-300 mt-2 leading-relaxed">{product.description}</p>
                    <p className="text-yellow-300 font-bold text-xl mt-4">{product.price}</p>

                    {/* Tombol Beli */}
                    <button className="mt-6 w-full md:w-auto bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-600 transition">
                        Add to Cart 🛒
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
