"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"}`}>
            <div className="container mx-auto px-6 flex items-center justify-between">
                <div className="flex items-center">
                    <a href="#home" className="relative w-12 h-12 md:w-16 md:h-16 transition-transform hover:scale-105 active:scale-95">
                        <Image
                            src="/logo.png"
                            alt="TTN Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </a>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    {["Home", "About", "Our Story", "Programs", "Impact"].map((item) => (
                        <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className={`text-sm font-medium hover:text-[#ff9d23] transition-colors ${scrolled ? "text-[#0c1818]" : "text-white"}`}>
                            {item}
                        </a>
                    ))}
                    <button className="bg-[#ff9d23] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#e68a1f] transition-all shadow-md">
                        Donate Now
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-2xl"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <span className={scrolled ? "text-[#0c1818]" : "text-white"}>
                        {mobileMenuOpen ? "✕" : "☰"}
                    </span>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 min-h-screen bg-black/95 z-[150] flex flex-col transition-all duration-700 ease-in-out md:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex justify-between items-center p-6 border-b border-white/10">
                    <div className="relative w-10 h-10">
                        <Image src="/logo.png" alt="Logo" fill className="object-contain" />
                    </div>
                    <button onClick={() => setMobileMenuOpen(false)} className="text-white text-3xl">✕</button>
                </div>

                <div className="flex flex-col items-center justify-center flex-grow gap-8">
                    {[
                        { name: "Home", id: "home" },
                        { name: "About Us", id: "about" },
                        { name: "Global Goals", id: "story" },
                        { name: "Our Programs", id: "programs" },
                        { name: "Our Impact", id: "impact" },
                        { name: "Donation", id: "donation" }
                    ].map((item, i) => (
                        <a
                            key={i}
                            href={`#${item.id}`}
                            className={`text-white text-4xl font-black uppercase tracking-tighter hover:text-[#ff9d23] transition-all transform ${mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                            style={{ transitionDelay: `${i * 100}ms` }}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}

                    <button className="bg-[#ff9d23] text-white px-12 py-4 rounded-full text-xl font-bold mt-8 shadow-2xl hover:scale-105 transition-transform">
                        Donate Now
                    </button>
                </div>
            </div>
        </nav>
    );
}
