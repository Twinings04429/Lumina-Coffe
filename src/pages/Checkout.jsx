// src/pages/Checkout.jsx
import React, { useState } from "react";
import { useCart } from "../context/CartContext";

function Checkout() {
    const { cart } = useCart();
    const [orderSuccess, setOrderSuccess] = useState(false);

    if (cart.length === 0) {
        return <h1 className="text-center text-red-500">Your cart is empty. Add some products first!</h1>;
    }

    const handleCheckout = () => {
        setOrderSuccess(true);
    };

    return (
        <div className="text-center p-8">
            <h1 className="text-3xl font-bold text-blue-600">Checkout</h1>
            {orderSuccess ? (
                <p className="text-green-600 mt-4">Thank you for your order! 🎉</p>
            ) : (
                <div>
                    <ul className="mt-4">
                        {cart.map((item) => (
                            <li key={item.id} className="text-gray-700">{item.name} - {item.price}</li>
                        ))}
                    </ul>
                    <button
                        className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
                        onClick={handleCheckout}
                    >
                        Confirm Order
                    </button>
                </div>
            )}
        </div>
    );
}

export default Checkout;