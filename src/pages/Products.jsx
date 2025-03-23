import React, { useState } from "react";
import { motion } from "framer-motion";
import ProductDetail from "./ProductDetail"; // Import modal
import menu1 from "../assets/resource/menu_1.jpg";
import menu2 from "../assets/resource/menu_2.jpg";
import menu3 from "../assets/resource/menu_3.jpg";
import menu4 from "../assets/resource/menu_4.jpg";
import menu5 from "../assets/resource/menu_5.jpg";

const products = [
    { id: 1, name: "Irish Coffee", price: "Rp 75.000", image: menu1 },
    { id: 2, name: "Avocado Mint", price: "Rp 50.000", image: menu2 },
    { id: 3, name: "Steak Tenderloin Saus", price: "Rp 500.000", image: menu3 },
    { id: 4, name: "Salad Segar Bahari", price: "Rp 100.000", image: menu4 },
    { id: 5, name: "Floral Slice Cake (Best Seller)", price: "Rp 85.000", image: menu5 }
];

function Products() {
    const [selectedProduct, setSelectedProduct] = useState(null); // State untuk modal

    return (
        <div className="min-h-screen bg-[#2D1E15] text-white p-8 relative">
            <h1 className="text-4xl font-bold text-center text-yellow-500 mb-8">Our Products</h1>

            {/* Grid untuk 4 menu pertama */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {products.slice(0, 4).map((product) => (
                    <motion.div
                        key={product.id}
                        whileHover={{ scale: 1.03 }}
                        className="flex bg-gray-100 text-black rounded-xl p-4 items-center gap-4 shadow-lg transition duration-300 border-2 border-yellow-500"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-28 h-28 rounded-lg object-cover shadow-md"
                        />
                        <div className="flex-1">
                            <h3 className="text-lg font-bold">{product.name}</h3>
                            <p className="text-gray-700 text-lg">{product.price}</p>
                        </div>
                        <button
                            onClick={() => setSelectedProduct(product)}
                            className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition font-semibold"
                        >
                            Detail
                        </button>
                    </motion.div>
                ))}
            </div>

            {/* Menu ke-5 (Best Seller di tengah bawah dengan border lebih kecil) */}
            <motion.div
                key={products[4].id}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-100 text-black rounded-xl p-3 mx-auto w-full md:w-1/3 mt-12 shadow-xl border border-yellow-500 text-center"
            >
                <h2 className="text-lg font-bold text-yellow-600 mb-2">🌟 Best Seller 🌟</h2>
                <img
                    src={products[4].image}
                    alt={products[4].name}
                    className="w-28 h-28 rounded-lg object-cover shadow-md mx-auto"
                />
                <h3 className="text-md font-bold mt-3">{products[4].name}</h3>
                <p className="text-gray-700 text-md">{products[4].price}</p>
                <button
                    onClick={() => setSelectedProduct(products[4])}
                    className="mt-4 inline-block bg-yellow-500 text-white px-5 py-2 rounded-lg hover:bg-yellow-600 transition font-semibold text-sm"
                >
                    Detail
                </button>
            </motion.div>

            {/* Modal Detail Produk */}
            {selectedProduct && (
                <ProductDetail product={selectedProduct} onClose={() => setSelectedProduct(null)} />
            )}
        </div>
    );
}

export default Products;
