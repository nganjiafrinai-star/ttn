import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
    const FacebookIcon = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const InstagramIcon = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
const TwitterIcon = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);
const YoutubeIcon = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2 103.11 103.11 0 0 1 15 0 2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2 103.11 103.11 0 0 1-15 0 2 2 0 0 1-2-2Z"/><path d="m10 15 5-3-5-3z"/></svg>
);
const TikTokIcon = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
);
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
                        <Link href="https://facebook.com" className="hover:text-[#ff9d23] transition-colors" title="Facebook">
                            <FacebookIcon size={18} />
                        </Link>
                        <Link href="https://instagram.com" className="hover:text-[#ff9d23] transition-colors" title="Instagram">
                            <InstagramIcon size={18} />
                        </Link>
                        <Link href="https://twitter.com" className="hover:text-[#ff9d23] transition-colors" title="Twitter">
                            <TwitterIcon size={18} />
                        </Link>
                        <Link href="https://youtube.com" className="hover:text-[#ff9d23] transition-colors" title="YouTube">
                            <YoutubeIcon size={18} />
                        </Link>
                        <Link href="https://tiktok.com" className="hover:text-[#ff9d23] transition-colors" title="TikTok">
                            <TikTokIcon size={18} /> {/* Using Music icon as TikTok icon */}
                        </Link>
                        </div>
                </div>
            </div>
        </footer>
    );
}