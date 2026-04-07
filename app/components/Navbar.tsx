"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
    const pathname = usePathname();
    const isTransparentPage = pathname === "/" || pathname?.startsWith("/projects/");
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Scroll listener
    useEffect(() => {
        const handleScroll = () => {
            if (!isTransparentPage) {
                setScrolled(true);
            } else {
                setScrolled(window.scrollY > 20);
            }
        };
        handleScroll(); // Initial check
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isTransparentPage]);

    // Body scroll lock
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [mobileMenuOpen]);

    const navItems = [
        { name: "Home", href: "/#home" },
        { name: "About", href: "/#about" },
        { name: "Programs", href: "/#programs" },
        { name: "Projects", href: "/projects" },
        { name: "Get in Touch", href: "/contact" },
        { name: "Stories", href: "/stories" }
    ];

    const mobileNavItems = [
        { name: "Home", href: "/#home" },
        { name: "About", href: "/#about" },
        { name: "Programs", href: "/#programs" },
        { name: "Projects", href: "/projects" },
        { name: "Get in Touch", href: "/contact" },
        { name: "Stories", href: "/stories" }
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
            scrolled 
                ? "py-3 bg-white/80 backdrop-blur-2xl border-b border-gray-100/50 shadow-[0_2px_20px_-5px_rgba(0,0,0,0.05)]" 
                : "py-6 bg-transparent"
        }`}>
            <div className="container mx-auto px-6 lg:px-12 relative flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center z-[160]">
                    <a
                        href="/#home"
                        className={`relative transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-105 ${
                            scrolled ? "w-20 h-16" : "w-32 h-24"
                        }`}
                    >
                        <Image
                            src="/ttn/i26.png"
                            alt="TTN Logo"
                            fill
                            className="object-contain drop-shadow-xl"
                            priority
                        />
                    </a>
                </div>

                {/* Desktop Navigation */}
                <div className={`hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full p-1.5 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                    scrolled 
                        ? "bg-gray-50/80 ring-1 ring-gray-200/50 shadow-sm" 
                        : "bg-white/10 backdrop-blur-md ring-1 ring-white/20"
                }`}>
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={`relative text-[13px] font-bold uppercase tracking-[0.1em] px-5 py-2.5 rounded-full transition-all duration-500 group ${
                                scrolled ? "text-slate-600 hover:text-[#0087aa]" : "text-white hover:text-slate-800"
                            }`}
                        >
                            <span className="relative z-10 transition-transform duration-500 group-hover:-translate-y-0.5 inline-block">{item.name}</span>
                            
                            {/* Animated Background Pill */}
                            <span className={`absolute inset-0 rounded-full transition-all duration-500 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 ${
                                scrolled ? "bg-white shadow-sm" : "bg-white shadow-lg"
                            }`}></span>

                            {/* Active Dot */}
                            <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#ff9d23] scale-0 transition-transform duration-300 group-hover:scale-100"></span>
                        </a>
                    ))}
                </div>

                {/* Desktop CTA Button */}
                <div className="hidden lg:flex items-center z-50">
                    <Link href="/donate" className="bg-[#ff9d23] text-white px-8 py-3 rounded-full text-[12px] font-black uppercase tracking-widest transition-all duration-500 shadow-lg hover:shadow-[#ff9d23]/40 hover:-translate-y-1 active:translate-y-0 group overflow-hidden relative">
                        <span className="relative z-10 flex items-center gap-2">
                            Donate
                            <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={3} />
                        </span>
                        <div className="absolute inset-0 h-full w-full bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out"></div>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden p-2 relative z-[160] transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <div className={`transition-all duration-300 ${scrolled || mobileMenuOpen ? "text-slate-800" : "text-white"}`}>
                        {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                    </div>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 min-h-[100dvh] bg-[#0c1818] z-[150] flex flex-col transition-transform duration-500 ease-in-out lg:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff9d23]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0087aa]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                <div className="flex flex-col items-center justify-center flex-grow py-10 px-6 overflow-y-auto relative z-10 pt-24">
                    <div className="flex flex-col items-center gap-6 w-full max-w-sm">
                        {mobileNavItems.map((item, i) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={`text-white/80 hover:text-[#ff9d23] text-4xl font-black uppercase tracking-tighter transition-all duration-500 transform ${
                                    mobileMenuOpen 
                                        ? "translate-y-0 opacity-100 scale-100" 
                                        : "translate-y-10 opacity-0 scale-95"
                                }`}
                                style={{ transitionDelay: mobileMenuOpen ? `${150 + i * 70}ms` : "0ms" }}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}

                        <div
                            className={`w-full mt-8 transition-all duration-700 transform ${mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
                            style={{ transitionDelay: mobileMenuOpen ? `${100 + mobileNavItems.length * 50 + 100}ms` : "0ms" }}
                        >
                            <Link href="/donate" onClick={() => setMobileMenuOpen(false)} className="w-full bg-[#ff9d23] text-white py-4 rounded-full text-lg font-bold shadow-[0_8px_30px_rgba(255,157,35,0.3)] hover:bg-[#e68a1f] transition-all flex items-center justify-center gap-2 group">
                                Donate Now
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
