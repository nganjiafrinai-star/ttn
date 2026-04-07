import Link from "next/link";
import { Building2, Smartphone, CreditCard, ArrowRight, Mail, Phone } from "lucide-react";

export default function DonationSection() {
    return (
        <section id="donation" className="py-16 md:py-24 bg-white relative">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="script-font text-[#0c1818] text-3xl md:text-5xl mb-8 md:mb-16 relative inline-block wavy-underline decoration-transparent">
                    Donation
                </h2>
                <p className="text-gray-500 max-w-3xl mx-auto mb-12 md:mb-20 leading-relaxed font-light text-sm md:text-base">
                    By donating you help our mission and help Burundi children. Discovering our purpose and building impact toward a peaceful world where transformed lives nurture other within sustainable and healthy environments.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20">
                    {/* Bank Card */}
                    <div className="bg-[#f0f8fa] rounded-[25px] md:rounded-[30px] p-8 md:p-10 text-left relative overflow-hidden group hover:shadow-lg transition-all border border-transparent hover:border-[#0087aa]/20">
                        <div className="flex items-center gap-3 mb-6">
                            <Building2 size={24} className="text-[#0087aa]" />
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
                    <div className="bg-[#f0f8fa] rounded-[25px] md:rounded-[30px] p-8 md:p-10 text-left relative overflow-hidden group hover:shadow-lg transition-all border border-transparent hover:border-[#0087aa]/20">
                        <div className="flex items-center gap-3 mb-6">
                            <Smartphone size={24} className="text-[#0087aa]" />
                            <h4 className="font-bold text-lg md:text-xl text-[#0c1818]">Mobile Money</h4>
                        </div>
                        <div className="space-y-3 text-gray-600 font-light text-sm">
                            <p className="flex justify-between border-b border-black/5 pb-2"><span>Provider:</span> <span className="font-medium text-[#0c1818]">Lumicash</span></p>
                            <p className="flex justify-between border-b border-black/5 pb-2"><span>Name:</span> <span className="font-medium text-[#0c1818]">TTN Mission</span></p>
                            <p className="flex justify-between"><span>Number:</span> <span className="font-medium text-[#0c1818]">+257 69022421</span></p>
                        </div>
                    </div>

                    {/* Online Donation Intro Card */}
                    <div className="bg-[#0c1818] rounded-[25px] md:rounded-[30px] p-8 md:p-10 text-left relative overflow-hidden shadow-2xl group border border-white/10">
                        <div className="flex items-center gap-3 mb-6 relative z-10">
                            <CreditCard size={24} className="text-[#ff9d23]" />
                            <h4 className="font-bold text-lg md:text-xl text-white">Online Donation</h4>
                        </div>
                        <p className="text-white/60 text-sm font-light mb-8 relative z-10 leading-relaxed">
                            Support us instantly using your credit card, PayPal or other digital methods. Simple, fast and secure.
                        </p>
                        <Link href="/donate" className="group/btn relative z-10 inline-flex items-center gap-2 bg-[#ff9d23] text-white px-6 py-3 rounded-2xl font-bold text-sm hover:bg-[#e68a1f] transition-all">
                            Donate Online
                            <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#ff9d23]/10 rounded-full blur-2xl"></div>
                    </div>
                </div>

                <div className="text-center pt-8 border-t border-gray-100">
                    <p className="font-medium text-gray-400 text-sm mb-4 uppercase tracking-widest">Questions?</p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12">
                        <div className="flex items-center gap-2 text-[#0c1818] font-bold">
                            <Mail size={18} className="text-[#0087aa]" /> donation-support@ttn.org
                        </div>
                        <div className="flex items-center gap-2 text-[#0c1818] font-bold">
                            <Phone size={18} className="text-[#0087aa]" /> +257 222 22 101
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
