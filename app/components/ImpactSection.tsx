export default function ImpactSection() {
    return (
        <section id="impact" className="py-16 md:py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 md:w-1/3 h-full overflow-hidden opacity-5 pointer-events-none">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#0087aa" d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,77.3,-44.7C85.4,-31.3,90.5,-15.7,89.5,-0.5C88.6,14.6,81.7,29.3,72,42.3C62.3,55.4,49.8,66.8,35.6,74.5C21.4,82.2,5.5,86.2,-10.1,84.5C-25.7,82.8,-41,75.4,-54,65.9C-67,56.4,-77.7,44.7,-84.3,31.2C-90.9,17.7,-93.4,2.3,-90.6,-12.3C-87.8,-26.9,-79.6,-40.7,-68.4,-51.7C-57.2,-62.7,-43,-70.9,-28.9,-77.6C-14.8,-84.3,-0.7,-89.5,14.4,-87.1C29.5,-84.7,44.7,-76.4,44.7,-76.4Z" transform="translate(100 100)" />
                </svg>
            </div>
            <div className="container mx-auto px-6 text-center">
                <h2 className="script-font text-[#0c1818] text-3xl md:text-5xl mb-16 md:mb-32 relative inline-block">
                    Our Growing <span className="text-[#0087aa] wavy-underline italic underline decoration-transparent">Impact</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
                    <div className="space-y-3 md:space-y-6">
                        <h3 className="text-5xl md:text-8xl font-black text-[#0c1818] drop-shadow-sm">24+</h3>
                        <p className="text-gray-400 uppercase tracking-[0.1em] md:tracking-[0.3em] text-[10px] md:text-xs font-semibold">Children Reached</p>
                    </div>
                    <div className="space-y-3 md:space-y-6">
                        <h3 className="text-5xl md:text-8xl font-black text-[#0c1818] drop-shadow-sm">20</h3>
                        <p className="text-gray-400 uppercase tracking-[0.1em] md:tracking-[0.3em] text-[10px] md:text-xs font-semibold">Community Served</p>
                    </div>
                    <div className="space-y-3 md:space-y-6">
                        <h3 className="text-5xl md:text-8xl font-black text-[#0c1818] drop-shadow-sm">10+</h3>
                        <p className="text-gray-400 uppercase tracking-[0.1em] md:tracking-[0.3em] text-[10px] md:text-xs font-semibold">Running Programs</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
