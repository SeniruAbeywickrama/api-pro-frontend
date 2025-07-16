import { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";

function Header() {
    const [showSideNav, setShowSideNav] = useState(false);

    return (
        <>
            {/* Top Header */}
            <header className="bg-black text-white p-6 fixed top-0 left-0 right-0 shadow-md z-50">
                <div className="container mx-auto flex justify-end md:justify-end lg:justify-center">
                    {/* Desktop / Tablet Navigation */}
                    <nav className="hidden md:flex gap-20">
                        <Link to="/" className="hover:underline">Home</Link>
                        <Link to="/about" className="hover:underline">About Us</Link>
                        <Link to="/pricing" className="hover:underline">Pricing</Link>
                        <Link to="/docs" className="hover:underline">Documentation</Link>
                        <Link to="/contact-us" className="hover:underline">Contact Us</Link>
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
                    <div className="fixed top-0 right-0 bottom-0 w-80 bg-black text-white z-50 p-6 flex flex-col gap-6 shadow-lg">
                        <button
                            className="self-end text-white text-2xl"
                            onClick={() => setShowSideNav(false)}
                        >
                            ✕
                        </button>
                        <Link to="/" onClick={() => setShowSideNav(false)}>HOME</Link>
                        <Link to="/about" onClick={() => setShowSideNav(false)}>ABOUT US</Link>
                        <Link to="/pricing" onClick={() => setShowSideNav(false)}>PRICING</Link>
                        <Link to="/docs" onClick={() => setShowSideNav(false)}>DOCUMENTATION</Link>
                        <Link to="/contact-us" onClick={() => setShowSideNav(false)}>CONTACT US</Link>
                    </div>
                </>
            )}
        </>
    );
}

export default Header;
