import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import coffeeCup from "../../assets/resource/CangkirCoffe.png";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    // Handle animasi logo
    const handleLogoClick = () => {
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 700); // Reset animasi setelah 700ms
    };

    return (
        <nav className="bg-[#2B1D14] text-white py-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center px-6">
                {/* Logo */}
                <Link to="/" onClick={handleLogoClick} className="flex items-center space-x-3">
                    <img
                        src={coffeeCup}
                        alt="Lumina Coffee"
                        className={`h-12 w-auto transform transition-all duration-700 ease-in-out ${isAnimating ? "rotate-[20deg] scale-110" : "rotate-0"
                            }`}
                    />
                    <span className="text-2xl font-semibold tracking-wide">Lumina Coffee</span>
                </Link>

                {/* Menu Button for Mobile */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Navigation Links */}
                <ul className={`absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-[#2B1D14] md:bg-transparent transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 visible" : "opacity-0 invisible md:opacity-100 md:visible"} md:flex space-y-4 md:space-y-0 md:space-x-8 text-lg font-medium text-gray-300 md:text-white`}>
                    <li><Link to="/" className="block px-6 py-3 md:py-0 hover:text-yellow-400 transition">HOME</Link></li>
                    <li><Link to="/products" className="block px-6 py-3 md:py-0 hover:text-yellow-400 transition">PRODUCT</Link></li>
                    <li><Link to="/contact" className="block px-6 py-3 md:py-0 hover:text-yellow-400 transition">CONTACT</Link></li>
                    <li><Link to="/about" className="block px-6 py-3 md:py-0 hover:text-yellow-400 transition">ABOUT</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
