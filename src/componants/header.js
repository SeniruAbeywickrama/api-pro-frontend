import { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";

function Header() {
    const [showSideNav, setShowSideNav] = useState(false);

    return (
        <>
            {/* Top Header */}
            <header className="bg-gradient-to-r from-stone-950 via-violet-950 shadow-xl to-stone-900 text-white p-6 fixed top-0 left-0 right-0 shadow-md z-50">
                <div className="container mx-auto flex justify-end md:justify-end lg:justify-center">
                    {/* Desktop / Tablet Navigation */}
                    <nav className="hidden md:flex gap-20">
                        <Link to="/" className="relative text-white hover:text-gray-300 transition-all duration-200 group px-3 py-2 rounded-lg hover:bg-white/20">
                            Home
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link to="/about" className="relative text-white hover:text-gray-300 transition-all duration-200 group px-3 py-2 rounded-lg hover:bg-white/20">
                            About Us
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link to="/pricing" className="relative text-white hover:text-gray-300 transition-all duration-200 group px-3 py-2 rounded-lg hover:bg-white/20">
                            Pricing
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link to="/docs" className="relative text-white hover:text-gray-300 transition-all duration-200 group px-3 py-2 rounded-lg hover:bg-white/20">
                            Documentation
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link to="/contact-us" className="relative text-white hover:text-gray-300 transition-all duration-200 group px-3 py-2 rounded-lg hover:bg-white/20">
                            Contact Us
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </nav>

                    {/* Hamburger - visible only on mobile/tablet */}
                    <button
                        className="lg:hidden text-white text-right"
                        onClick={() => setShowSideNav(true)}
                    >
                        <MdOutlineMenu size={30} />
                    </button>
                </div>
            </header>

            {/* Side Navigation Overlay */}
            {showSideNav && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={() => setShowSideNav(false)}
                    />

                    {/* Side Drawer */}
                    <div className="fixed bg-gradient-to-r from-stone-950 via-violet-950  top-0 right-0 bottom-0 w-80 bg-black text-white z-50 p-6 flex flex-col gap-6 shadow-lg">
                        <button
                            className="self-end text-white text-2xl"
                            onClick={() => setShowSideNav(false)}
                        >
                            ✕
                        </button>
                        <Link to="/" className="relative text-white hover:text-gray-300 transition-all duration-200 group px-3 py-2 rounded-lg hover:bg-white/20" onClick={() => setShowSideNav(false)}>HOME</Link>
                        <Link to="/about" className="relative text-white hover:text-gray-300 transition-all duration-200 group px-3 py-2 rounded-lg hover:bg-white/20"  onClick={() => setShowSideNav(false)}>ABOUT US</Link>
                        <Link to="/pricing" className="relative text-white hover:text-gray-300 transition-all duration-200 group px-3 py-2 rounded-lg hover:bg-white/20"  onClick={() => setShowSideNav(false)}>PRICING</Link>
                        <Link to="/docs" className="relative text-white hover:text-gray-300 transition-all duration-200 group px-3 py-2 rounded-lg hover:bg-white/20"  onClick={() => setShowSideNav(false)}>DOCUMENTATION</Link>
                        <Link to="/contact-us" className="relative text-white hover:text-gray-300 transition-all duration-200 group px-3 py-2 rounded-lg hover:bg-white/20"  onClick={() => setShowSideNav(false)}>CONTACT US</Link>
                    </div>
                </>
            )}
        </>
    );
}

export default Header;
