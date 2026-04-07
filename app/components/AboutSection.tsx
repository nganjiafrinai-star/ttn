import Image from "next/image";

export default function AboutSection() {
    return (
        <section id="about" className="py-12 md:py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-0 rounded-[20px] md:rounded-[40px] overflow-hidden shadow-2xl">
                    {/* Left Column: White with Cross Pattern */}
                    <div className="lg:w-1/2 relative bg-white min-h-[350px] md:min-h-[1000px] p-0 flex flex-col items-center justify-center overflow-hidden">
                        {/* Cross/Plus Pattern Background */}
                        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px), radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '30px 30px', backgroundPosition: '0 0, 15px 15px' }}></div>

                        {/* About Us Header - Overlay on Image */}
                        {/* <div className="absolute top-6 left-6 md:top-12 md:left-12 flex items-center gap-3 md:gap-4 z-20">
                            <div className="w-8 h-8 md:w-10 md:h-10 border-2 border-white rounded-full flex items-center justify-center p-1 bg-white bg-opacity-90">
                                <Image src="/logo.png" alt="TTN" width={30} height={30} className="object-cover grayscale" />
                            </div>
                            <h2 className="script-font text-2xl md:text-3xl font-bold text-white italic drop-shadow-lg">About Us</h2>
                        </div> */}

                        <div className="relative z-10 w-full h-full">
                            {/* Orange Corner Brackets */}
                            {/* <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-8 h-8 md:w-12 md:h-12 border-t-4 md:border-t-8 border-l-4 md:border-l-8 border-[#ff9d23] rounded-tl-lg md:rounded-tl-xl"></div>
                            <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-8 h-8 md:w-12 md:h-12 border-t-4 md:border-t-8 border-r-4 md:border-r-8 border-[#ff9d23] rounded-tr-lg md:rounded-tr-xl"></div>
                            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-8 h-8 md:w-12 md:h-12 border-b-4 md:border-b-8 border-l-4 md:border-l-8 border-[#ff9d23] rounded-bl-lg md:rounded-bl-xl"></div>
                            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-8 h-8 md:w-12 md:h-12 border-b-4 md:border-b-8 border-r-4 md:border-r-8 border-[#ff9d23] rounded-br-lg md:rounded-br-xl"></div> */}

                            {/* Main Image - Full Size */}
                            <div className="relative w-full h-full overflow-hidden">
                                <Image
                                    src="/ttn/i21.jpeg"
                                    alt="TTN Team"
                                    width={800}
                                    height={600}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Dark Grey Timeline */}
                    <div className="lg:w-1/2 bg-[#1a1a1a] p-8 md:p-24 text-white relative flex flex-col justify-center min-h-[500px] md:min-h-[600px]">
                        {/* Sketchy Arrow Top Left */}
                        <div className="absolute top-6 left-6 md:top-10 md:left-10 text-[#0087aa] opacity-60">
                            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 md:w-11 md:h-11">
                                <path d="M30 70 L50 90 L70 70 M50 90 L50 30" strokeDasharray="2 4" opacity="0.5" />
                                <path d="M20 50 L50 80 L80 50" />
                                <path d="M20 30 L50 60 L80 30" />
                            </svg>
                        </div>

                        <div className="relative z-10 space-y-12 md:space-y-24 mt-8 md:mt-0">
                            {/* Hand-Drawn Styled Vertical Line - Adjusted for mobile */}
                            <div className="absolute top-4 left-[15px] md:left-[19px] bottom-10 w-1 bg-[#0087aa] opacity-20 rounded-full blur-[0.5px]"></div>
                            <div className="absolute top-4 left-[15px] md:left-[19px] bottom-10 w-[1px] bg-[#0087aa] opacity-40"></div>

                            {/* Who We Are */}
                            <div className="relative pl-12 md:pl-16">
                                <div className="absolute top-0 left-0 w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#0087aa] bg-[#1a1a1a] flex items-center justify-center shadow-[0_0_15px_rgba(0,183,212,0.2)]">
                                    <div className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full bg-[#0087aa] shadow-inner"></div>
                                </div>
                                <h2 className="text-2xl md:text-4xl font-bold text-[#0087aa] mb-3 md:mb-5 tracking-tight">Who We Are</h2>
                                <p className="text-gray-300 font-light leading-relaxed max-w-lg text-sm md:text-base">
                                    
                                TTN-Mission is a community-based organization committed to raising a generation of purpose-driven young people. We believe that every child is uniquely created with God-given talents and a divine purpose.
                                Through intentional discipleship, we nurture these talents, share the life-transforming message of the Gospel, and cultivate a strong culture of learning and creativity. Our approach is holistic—focusing on spiritual growth, intellectual development, and personal transformation.
                                We envision a generation of children and youth who shine in their communities—grounded in faith, equipped with knowledge, and empowered to make a lasting impact in the world.
                                </p>
                            </div>

                            {/* Our Vision */}
                            <div className="relative pl-12 md:pl-16">
                                <div className="absolute top-0 left-0 w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#0087aa] bg-[#1a1a1a] flex items-center justify-center shadow-[0_0_15px_rgba(0,183,212,0.2)]">
                                    <div className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full bg-[#0087aa] shadow-inner"></div>
                                </div>
                                <h2 className="text-2xl md:text-4xl font-bold text-[#0087aa] mb-3 md:mb-5 tracking-tight">Our Vision</h2>
                                <p className="text-gray-300 font-light leading-relaxed max-w-lg text-sm md:text-base">
                                    A world transformed by the gospel and free from poverty.
                                </p>
                            </div>

                            {/* Our Mission */}
                            <div className="relative pl-12 md:pl-16">
                                <div className="absolute top-0 left-0 w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#0087aa] bg-[#1a1a1a] flex items-center justify-center shadow-[0_0_15px_rgba(0,183,212,0.2)]">
                                    <div className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full bg-[#0087aa] shadow-inner"></div>
                                </div>
                                <h2 className="text-2xl md:text-4xl font-bold text-[#0087aa] mb-3 md:mb-5 tracking-tight">Our Mission</h2>
                                <p className="text-gray-300 font-light leading-relaxed max-w-lg text-sm md:text-base">
                                    To provide children and young people with an environment of opportunities
                                    to live with hope, grow in faith, develop their skills and discover their purpose.
                                </p>
                            </div>
                        </div>

                        {/* Dot Grid Decoration Bottom Right */}
                        <div className="absolute bottom-12 right-24 opacity-10 grid grid-cols-8 gap-3">
                            {[...Array(32)].map((_, i) => (
                                <div key={i} className="w-1.5 h-1.5 rounded-full bg-white"></div>
                            ))}
                        </div>

                        {/* Sketchy Arrow Bottom Right */}
                        <div className="absolute bottom-10 right-10 text-[#0087aa] opacity-60">
                            <svg width="35" height="35" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="rotate-[135deg]">
                                <path d="M20 50 L50 80 L80 50" />
                                <path d="M20 30 L50 60 L80 30" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Orange Circle Decoration */}
                <div className="w-48 h-48 md:w-64 md:h-64 bg-[#ff9d23] rounded-full absolute -left-20 md:-left-32 -bottom-20 md:-bottom-32 z-0 opacity-20 md:opacity-100"></div>
            </div>
        </section>
    );
}
