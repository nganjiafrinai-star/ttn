import Image from "next/image";

export default function Hero() {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            <Image
                src="/image 1.png"
                alt="TTN Hero"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 text-center px-6 max-w-5xl">
                <h1 className="text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-8 drop-shadow-2xl">
                    Empowering Children to <br />
                    Discover their <span className="script-font text-[#ff9d23] italic wavy-underline">Purpose.</span>
                </h1>
                <p className="text-white/80 text-lg md:text-2xl font-light italic mb-10 max-w-3xl mx-auto border-l-4 border-l-[#ff9d23] pl-6 bg-black/20 backdrop-blur-sm py-4 rounded-r-xl">
                    "You cannot help everyone but you can help someone, you cannot do everything but you can do something."
                </p>

                <div className="flex gap-3 justify-center mt-12 md:mt-16">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/40 ring-1 ring-white/10"></span>
                    <span className="w-6 md:w-8 h-2.5 rounded-full bg-[#0087aa] ring-1 ring-[#0087aa]/30"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-white/40 ring-1 ring-white/10"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-white/40 ring-1 ring-white/10"></span>
                </div>
            </div>

            {/* Decorative Circle Link */}
            <div className="absolute bottom-12 right-12 w-32 h-32 bg-[#0087aa] rounded-full flex items-center justify-center animate-float hidden lg:flex">
                <span className="text-white text-center font-bold text-sm leading-tight">Join Our <br /> Mission</span>
            </div>
        </section>
    );
}
