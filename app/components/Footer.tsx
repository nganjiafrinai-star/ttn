import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#0c1818] text-white pt-24 pb-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
                    <div className="col-span-1">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="relative w-12 h-12">
                                <Image
                                    src="/logo.png"
                                    alt="TTN Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-xl font-bold tracking-tight">TTN Mission</span>
                        </div>
                        <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base">
                            We are committed to building impact towards a peaceful world where transformed lives nurture education and inspire faith in global children's future.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-[#0087aa] text-sm">Quick Links</h4>
                        <ul className="space-y-4 text-gray-400 font-light">
                            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Programs</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Impact</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Donation</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-[#0087aa] text-sm">Programs</h4>
                        <ul className="space-y-4 text-gray-400 font-light md:whitespace-nowrap">
                            <li><a href="#" className="hover:text-white transition-colors">Prospering Youth</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Agricultural Production</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Industrial Development</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-[#0087aa] text-sm md:whitespace-nowrap">Contact Us</h4>
                        <ul className="space-y-4 text-gray-400 font-light">
                            <li>TTN Mission, Bujumbura - Burundi</li>
                            <li>Phone: (257) 22 22 101</li>
                            <li>Email: info@ttnmission.org</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-12 flex flex-col md:flex-row items-center justify-between gap-8">
                    <p className="text-gray-500 font-light text-sm">© 2024 TTN Mission All Rights Reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="text-gray-500 hover:text-white transition-colors">fb</a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors">tw</a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors">in</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
