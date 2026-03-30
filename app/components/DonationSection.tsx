export default function DonationSection() {
    return (
        <section id="donation" className="py-16 md:py-24 bg-white relative">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="script-font text-[#0c1818] text-3xl md:text-5xl mb-8 md:mb-16 relative inline-block wavy-underline decoration-transparent">
                    Donation
                </h2>
                <p className="text-gray-500 max-w-3xl mx-auto mb-12 md:mb-20 leading-relaxed font-light text-sm md:text-base">
                    By donating you help our mission and help global children. Discovering our purpose and building impact toward a peaceful world where transformed lives nurture other within sustainable and healthy environments.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
                    {/* Bank Card */}
                    <div className="bg-[#f0f8fa] rounded-[25px] md:rounded-[30px] p-8 md:p-10 text-left relative overflow-hidden group hover:shadow-lg transition-all">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-[#0087aa] text-xl">🏦</span>
                            <h4 className="font-bold text-lg md:text-xl text-[#0c1818]">Bank Transfer</h4>
                        </div>
                        <div className="space-y-3 text-gray-600 font-light text-sm">
                            <p className="flex justify-between border-b border-black/5 pb-2"><span>Account:</span> <span className="font-medium text-[#0c1818]">TTN Mission</span></p>
                            <p className="flex justify-between border-b border-black/5 pb-2"><span>Bank:</span> <span className="font-medium text-[#0c1818]">EcoBank Burundi</span></p>
                            <p className="flex flex-col gap-1 border-b border-black/5 pb-2"><span>Number:</span> <span className="font-medium text-[#0c1818]">130284451739101</span></p>
                            <p className="flex justify-between"><span>SWIFT:</span> <span className="font-medium text-[#0c1818]">1118182741</span></p>
                        </div>
                    </div>

                    {/* Mobile Money Card */}
                    <div className="bg-[#f0f8fa] rounded-[25px] md:rounded-[30px] p-8 md:p-10 text-left relative overflow-hidden group hover:shadow-lg transition-all">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-[#0087aa] text-xl">📱</span>
                            <h4 className="font-bold text-lg md:text-xl text-[#0c1818]">Mobile Money</h4>
                        </div>
                        <div className="space-y-3 text-gray-600 font-light text-sm">
                            <p className="flex justify-between border-b border-black/5 pb-2"><span>Provider:</span> <span className="font-medium text-[#0c1818]">Lumicash</span></p>
                            <p className="flex justify-between border-b border-black/5 pb-2"><span>Name:</span> <span className="font-medium text-[#0c1818]">TTN Mission</span></p>
                            <p className="flex justify-between"><span>Number:</span> <span className="font-medium text-[#0c1818]">+257 69022421</span></p>
                        </div>
                    </div>

                    {/* Paypal Card */}
                    <div className="bg-[#f0f8fa] rounded-[25px] md:rounded-[30px] p-8 md:p-10 text-left relative overflow-hidden group hover:shadow-lg transition-all">
                        <div className="flex items-center gap-3 mb-6 relative z-10">
                            <span className="text-[#0087aa] text-xl">🌐</span>
                            <h4 className="font-bold text-lg md:text-xl text-[#0c1818]">Paypal</h4>
                        </div>
                        <div className="space-y-4 text-gray-600 font-light text-sm relative z-10">
                            <p className="flex flex-col gap-1 border-b border-black/5 pb-2"><span>Link:</span> <span className="font-medium text-[#0087aa]">paypal.me/ttnmission</span></p>
                            <p className="flex flex-col gap-1"><span>Email:</span> <span className="font-medium text-[#0c1818]">info@ttnmission.org</span></p>
                        </div>
                        <div className="absolute bottom-[-20px] right-[-20px] w-24 h-24 bg-[#0087aa]/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                        <div className="absolute bottom-0 right-0 w-12 h-12 bg-[#0087aa] rounded-tl-full opacity-60"></div>
                    </div>
                </div>

                <div className="text-center">
                    <p className="font-bold text-[#0c1818] mb-4">Need assistance with your donation?</p>
                    <a href="#" className="text-[#0087aa] font-medium underline flex items-center justify-center gap-2">
                        Contact our donation support team:
                    </a>
                    <p className="mt-2 text-gray-600 font-light">Email: donation-support@ttn.org</p>
                    <p className="text-gray-600 font-light">Phone: +257 222 22 101</p>
                </div>
            </div>
        </section>
    );
}
