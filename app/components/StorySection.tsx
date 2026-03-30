import Image from "next/image";

export default function StorySection() {
    return (
        <section id="story" className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
                    {/* Left side: Founder Image */}
                    <div className="relative order-2 lg:order-1">
                        {/* Decorative background shape */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#0087aa]/10 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-[#ff9d23]/10 rounded-full blur-3xl"></div>

                        {/* Founder Image Wrapper */}
                        <div className="relative rounded-[30px] md:rounded-[40px] overflow-hidden border-4 md:border-8 border-white p-2 md:p-4 bg-white shadow-lg rotate-[-1deg] md:rotate-[-2deg] mx-auto max-w-[400px] lg:max-w-none">
                            <Image
                                src="/tuto 1.png"
                                alt="Founder"
                                width={500}
                                height={600}
                                className="object-cover w-full h-auto aspect-[4/5] rounded-[20px] md:rounded-[30px]"
                            />
                            <div className="absolute bottom-10 left-10 text-white z-10">
                                <h4 className="text-2xl font-black drop-shadow-md">Bizokomere Jean Pierre</h4>
                                <p className="text-[#ff9d23] font-bold drop-shadow-md">Founder, TTN Mission</p>
                            </div>
                            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent"></div>
                        </div>
                    </div>

                    {/* Right side: Global Goals */}
                    <div className="order-1 lg:order-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-1 bg-[#ff9d23] rounded-full"></div>
                            <span className="text-[#ff9d23] font-black uppercase tracking-[0.2em] text-[10px] md:text-base">Strategic Intent</span>
                        </div>
                        <h2 className="text-3xl md:text-6xl font-black text-[#0c1818] leading-tight mb-8">
                            Our <span className="text-[#0087aa]">Global Goals</span>
                        </h2>

                        <div className="space-y-6">
                            {[
                                { title: "Discipleship Multiplication", desc: "Go, Teach them to obey all I have recommended you." },
                                { title: "Orphans Care", desc: "Providing support and family for the fatherless." },
                                { title: "Talent Development", desc: "Identifying and nurturing creative and athletic skills." },
                                { title: "Intellectual Capacity", desc: "Developing analytical and academic abilities." },
                                { title: "Empowerment Support", desc: "For vulnerable women and youth." }
                            ].map((goal, i) => (
                                <div key={i} className="flex gap-4 group">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white shadow-md flex items-center justify-center text-[#ff9d23] font-bold group-hover:bg-[#ff9d23] group-hover:text-white transition-all duration-300">
                                        {i + 1}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-[#0c1818] group-hover:text-[#0087aa] transition-colors">{goal.title}</h4>
                                        <p className="text-gray-500 font-light text-sm">{goal.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Core Values Section (Internal but distinct) */}
                <div className="bg-[#0087aa] rounded-[30px] md:rounded-[40px] p-8 md:p-16 text-white text-center shadow-xl">
                    <h3 className="text-2xl md:text-5xl font-black mb-10 md:mb-12 uppercase tracking-tight">Our Core Values</h3>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                        {["Faith", "Vision", "Hardwork", "Unity", "Responsibility"].map((value, i) => (
                            <div key={i} className="flex flex-col items-center gap-4 group">
                                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-3xl group-hover:bg-white group-hover:text-[#0087aa] transition-all duration-300">
                                    {i === 0 && "✝"} {i === 1 && "👁"} {i === 2 && "💪"} {i === 3 && "🤝"} {i === 4 && "⚡"}
                                </div>
                                <span className="font-bold uppercase tracking-widest text-sm">{value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
