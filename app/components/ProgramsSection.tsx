import Image from "next/image";

export default function ProgramsSection() {
    return (
        <section id="programs" className="py-24 bg-white">
            <div className="container mx-auto px-6 text-center">
                <div className="flex items-center justify-center gap-3 mb-6">
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-[#0c1818] mb-8 leading-tight">
                    Our <span className="text-[#0087aa]">Programs</span>
                </h2>
                <p className="text-gray-400 font-light text-lg md:text-xl max-w-3xl mx-auto mb-16">
                    Our framework is divided into three key pillars to ensure a holistic approach to child development and community empowerment.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Kids Outreach",
                            image: "/ttn/i6.jpeg",
                            desc: "Ministries focused on the most vulnerable children: NP-HOH (Homes of Hope), PM (Porridge Ministry), and SMS (Send Me to School)."
                        },
                        {
                            title: "Discipleship and Leadership Multiplication",
                            image: "/ttn/i7.jpeg",
                            desc: "Discipleship and Leadership frameworks: TD (Talent), ICD (Intellectual Capacity), and NPL (Legacy)."
                        },
                        {
                            title: "Women and Youth Development Framework",
                            image: "/ttn/i31.jpeg",
                            desc: "Frameworks for Women and Youth sustainable growth: FAB (Financial), and LP (Leadership)."
                        }
                    ].map((program, i) => (
                        <div key={i} className="bg-white rounded-[30px] md:rounded-[40px] overflow-hidden transition-all duration-300 group">
                            <div className="relative h-64 overflow-hidden">
                                <Image src={program.image} alt={program.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <div className="p-6 md:p-8 text-left border-b-8 border-transparent group-hover:border-[#0087aa] transition-all">
                                <h4 className="text-xl font-bold text-[#0087aa] mb-3 uppercase tracking-tight">{program.title}</h4>
                                <p className="text-gray-500 font-light text-sm leading-relaxed">{program.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
