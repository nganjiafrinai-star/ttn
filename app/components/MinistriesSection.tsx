export default function MinistriesSection() {
    return (
        <section className="py-24 bg-[#0c1818] text-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6 md:gap-8">
                    <div className="max-w-2xl text-left">
                        <h2 className="text-3xl md:text-6xl font-black leading-tight">
                        Projects(Ministries)
                        </h2>
                    </div>
                    <div className="text-gray-400 font-light text-base md:text-lg">
                        Direct hands-on impact on the ground.
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { label: "NP-HOH", title: "Homes of Hope", desc: "Providing safe and loving homes through our orphanages." },
                        { label: "PM", title: "Porridge Ministry", desc: "Critical feeding programs for hungry children." },
                        { label: "SMS", title: "Send Me to School", desc: "Providing essential school materials and tuition fees." },
                        { label: "TD", title: "Talent Development", desc: "Clubs for Soccer, Basketball, Music, Drawing & English." },
                        { label: "ICD", title: "Intellectual Capacity Development", desc: "..." },
                        { label: "FAB", title: "Finance Access For Women Business", desc: "..." }
                    ].map((project, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all group">
                            <div className="text-[#ff9d23] font-black text-xl mb-4 opacity-50">{project.label}</div>
                            <h4 className="text-2xl font-bold mb-4 group-hover:text-[#0087aa] transition-colors">{project.title}</h4>
                            <p className="text-gray-400 font-light text-sm leading-relaxed">{project.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
