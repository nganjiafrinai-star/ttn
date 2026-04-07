import Image from "next/image";
import { Heart, Eye, Zap, Users, ShieldCheck } from "lucide-react";

export default function StorySection() {
    return (
        <section id="story" className="py-24 bg-[#f4faff] relative overflow-hidden">
            {/* Decorative Corner Shape */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#ff9d23] rounded-full opacity-20"></div>

            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center mb-24 relative">
                    {/* Left Column: Founder Card (lg:span-5) */}
                    <div className="lg:col-span-5 relative">
                        <div className="relative z-10 bg-white rounded-[40px] shadow-2xl p-3 border border-gray-100 overflow-hidden group">
                           <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden bg-gray-100">
                                <Image
                                    src="/ttn/i24.jpeg"
                                    alt="Founder of TTN Mission"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                           </div>
                        </div>

                        {/* Sketchy Arrow pointing to text */}
                        <div className="absolute -top-12 -right-12 w-32 h-32 hidden lg:block text-[#ff9d23] opacity-60">
                            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                <path d="M10 20 C 40 10, 70 10, 85 40" strokeDasharray="2 2" />
                                <path d="M78 35 L85 40 L80 47" />
                            </svg>
                        </div>
                    </div>

                    {/* Right Column: Story Content (lg:span-7) */}
                    <div className="lg:col-span-7 relative">
                        {/* Decorative Top Right Corner */}
                        <div className="absolute -top-6 -right-6 w-12 h-12 border-t-2 border-r-2 border-[#ff9d23]/30 rounded-tr-2xl hidden md:block"></div>
                        
                        <div className="relative z-10">
                            <h2 className="script-font text-4xl md:text-5xl font-bold text-[#ff9d23] mb-6 inline-block relative">
                                Our Story
                                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                                    <path d="M0 5 Q 25 1, 50 5 T 100 5" stroke="#ff9d23" strokeWidth="2" fill="none" />
                                </svg>
                            </h2>
                            
                            <div className="space-y-6 text-[#1a2e2e] text-lg md:text-xl font-light leading-relaxed">
                                <p>
                                    Years ago, our founder witnessed firsthand the struggles of children in underserved communities. 
                                    Many lacked not just basic resources, but the emotional support and opportunities needed to 
                                    envision a future beyond their immediate circumstances.
                                </p>
                                <p>
                                    Driven by faith and a deep conviction that every life has profound value, 
                                    TTN Mission started from humble beginnings—a small gathering of volunteers dedicated 
                                    to mentoring a handful of neighborhood kids. What began as a simple weekend program 
                                    quickly grew into a movement of hope.
                                </p>
                                <p>
                                    Today, TTN Mission serves hundreds of children across multiple communities. 
                                    While our programs have expanded, our heart remains exactly the same: we believe 
                                    that every child deserves the chance to discover their purpose, grounded in faith 
                                    and supported by a loving community.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#0087aa] rounded-[30px] md:rounded-[40px] p-6 pb-4 mb-20 md:p-10 text-white text-center shadow-xl">
                    <h3 className="text-xl md:text-5xl font-black mb-10 md:mb-12 uppercase tracking-tight">Our Core Values</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8">
                        {[
                            { name: "Faith", icon: <Heart size={28} /> },
                            { name: "Vision", icon: <Eye size={28} /> },
                            { name: "Hardwork", icon: <Zap size={28} /> },
                            { name: "Unity", icon: <Users size={28} /> },
                            { name: "Responsibility", icon: <ShieldCheck size={28} /> }
                        ].map((value, i) => (
                            <div key={i} className="flex flex-col items-center gap-3 md:gap-4 group">
                                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white group-hover:text-[#0087aa] transition-all duration-300">
                                    {value.icon}
                                </div>
                                <span className="font-bold uppercase tracking-widest text-[10px] md:text-sm">{value.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Global Goals Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-10">
                    {/* Left side: Image Placeholder */}
                    <div className="relative order-2 lg:order-1">
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#0087aa]/10 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-[#ff9d23]/10 rounded-full blur-3xl"></div>
                        <div className="relative rounded-[30px] md:rounded-[40px] overflow-hidden border-4 md:border-8 border-white p-2 md:p-4 bg-white shadow-lg rotate-[-1deg] md:rotate-[-2deg] mx-auto max-w-[400px] lg:max-w-none">
                            <div className="relative w-full aspect-[4/5] bg-gray-200 rounded-[20px] md:rounded-[30px] flex items-center justify-center">
                                {/* Place your Global Goals image here */}
                                {/* <Image src="/ttn/your-image.jpg" alt="Global Goals" width={500} height={600} className="object-cover w-full h-full rounded-[20px] md:rounded-[30px]" /> */}
                                <span className="text-gray-400 text-sm">Image Placeholder</span>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl md:text-5xl font-black text-[#0c1818] leading-tight mb-8">
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

            </div>
        </section>
    );
}
