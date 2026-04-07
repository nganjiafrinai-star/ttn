"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
    const images = ["/ttn/i3.jpeg", "/ttn/i20.jpeg", "/ttn/i29.jpeg", "/ttn/i21.jpeg", "/ttn/i28.jpeg"];
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 3000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="flex h-full transition-transform duration-1000 ease-in-out w-full"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="w-full h-full relative shrink-0 min-w-full"
                        >
                            <Image
                                src={src}
                                alt={`TTN Hero ${index + 1}`}
                                fill
                                className="object-cover"
                                priority={index === 0}
                                sizes="100vw"
                                quality={85}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 text-center px-6 max-w-5xl mt-12 md:mt-20">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white leading-[1.1] mb-8 tracking-tighter">
                    Empowering Children for a <br className="hidden md:block" />
                    Future of <span className="script-font text-[#ff9d23] italic wavy-underline inline-block mt-2">Hope.</span>
                </h1>
                <p className="text-white/80 text-base md:text-xl font-light italic mb-8 max-w-2xl mx-auto border-l-4 border-[#ff9d23] pl-6 bg-black/10 backdrop-blur-sm py-4 rounded-r-2xl leading-relaxed">
                    "You cannot help everyone but you can help someone, you cannot do everything but you can do something."
                </p>
            </div>

            {/* Decorative Circle Link */}
            <div className="absolute bottom-12 right-12 w-32 h-32 bg-[#0087aa] rounded-full flex items-center justify-center animate-float hidden lg:flex">
                <span className="text-white text-center font-bold text-sm leading-tight">Join Our <br /> Mission</span>
            </div>
        </section>
    );
}
