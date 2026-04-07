import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Globe, Camera, X } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#0c1818] text-white pt-24 pb-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 mb-24">
                    <div className="col-span-1">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="relative w-16 h-12">
                                <Image
                                    src="/ttn/i26.png"
                                    alt="TTN Logo"
                                    fill
                                    className="object-contain brightness-0 invert"
                                />
                            </div>
                            <span className="text-xl font-black tracking-tight uppercase">TTN <span className="text-[#0087aa]">Mission</span></span>
                        </div>
                        <p className="text-gray-400 font-light leading-relaxed text-sm">
                            Raising a generation of purpose-driven young people through faith, talent development, and intellectual growth in Kigali and beyond.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-8 uppercase tracking-widest text-[#0087aa] text-xs">Navigation</h4>
                        <ul className="space-y-4 text-gray-400 font-light text-sm">
                            <li><Link href="/#home" className="hover:text-[#ff9d23] transition-colors">Home</Link></li>
                            <li><Link href="/#about" className="hover:text-[#ff9d23] transition-colors">About Us</Link></li>
                            <li><Link href="/projects" className="hover:text-[#ff9d23] transition-colors">Our Projects</Link></li>
                            <li><Link href="/stories" className="hover:text-[#ff9d23] transition-colors">Stories of Hope</Link></li>
                            <li><Link href="/donate" className="hover:text-[#ff9d23] transition-colors">Support Our Cause</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-8 uppercase tracking-widest text-[#0087aa] text-xs">Key Ministries</h4>
                        <ul className="space-y-4 text-gray-400 font-light text-sm md:whitespace-nowrap">
                            <li><Link href="/projects/hoh" className="hover:text-white transition-colors">Homes of Hope</Link></li>
                            <li><Link href="/projects/pm" className="hover:text-white transition-colors">Porridge Ministry</Link></li>
                            <li><Link href="/projects/sms" className="hover:text-white transition-colors">Send Me to School</Link></li>
                            <li><Link href="/projects/td" className="hover:text-white transition-colors">Talent Development</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-8 uppercase tracking-widest text-[#0087aa] text-xs">Get in Touch</h4>
                        <ul className="space-y-4 text-gray-400 font-light text-sm">
                            <li className="flex gap-3 items-center">
                                <MapPin size={16} className="text-[#ff9d23]" /> Bujumbura, Burundi
                            </li>
                            <li className="flex gap-3 items-center">
                                <Phone size={16} className="text-[#ff9d23]" /> (257) 22 22 101
                            </li>
                            <li className="flex gap-3 items-center">
                                <Mail size={16} className="text-[#ff9d23]" /> info@ttnmission.org
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row items-center justify-between gap-8">
                    <p className="text-gray-500 font-light text-xs tracking-wide">
                        © {new Date().getFullYear()} TTN Mission. Rooted in faith. Powered by love.
                    </p>
                    <div className="flex gap-6 opacity-40 hover:opacity-100 transition-opacity">
                        <Link href="#" className="hover:text-[#ff9d23] transition-colors" title="Facebook"><Globe size={18} /></Link>
                        <Link href="#" className="hover:text-[#ff9d23] transition-colors" title="Instagram"><Camera size={18} /></Link>
                        <Link href="#" className="hover:text-[#ff9d23] transition-colors" title="Twitter"><X size={18} /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}