"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";

export default function ContactPage() {
    const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // Reset form or send data
    };

    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            
            <div className="pt-24 md:pt-32 pb-24 container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div>
                        <h1 className="text-4xl md:text-7xl font-black text-[#0c1818] mb-6 md:mb-8 leading-tight">Get in <span className="text-[#ff9d23]">Touch</span></h1>
                        <p className="text-gray-500 text-base md:text-xl font-light mb-8 md:mb-12 leading-relaxed">
                            Have questions or want to learn more about our mission? We'd love to hear from you. 
                            Our team is here to support you in any way we can.
                        </p>

                        <div className="space-y-8">
                            {[
                                { title: "Location", value: "Bujumbura, Burundi", icon: <MapPin className="w-6 h-6" /> },
                                { title: "Email", value: "info@ttnmission.org", icon: <Mail className="w-6 h-6" /> },
                                { title: "Phone", value: "+257 22 22 101", icon: <Phone className="w-6 h-6" /> }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-[#ff9d23] group-hover:bg-[#ff9d23] group-hover:text-white transition-all duration-300 shadow-sm">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#0c1818]">{item.title}</h4>
                                        <p className="text-gray-500 font-light">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-[40px] p-8 md:p-12 shadow-2xl relative overflow-hidden">
                        {submitted ? (
                            <div className="text-center py-20">
                                <div className="text-6xl mb-6">✅</div>
                                <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                                <p className="text-gray-500">Thank you for reaching out. We'll get back to you shortly.</p>
                                <button onClick={() => setSubmitted(false)} className="mt-8 text-[#ff9d23] font-bold underline">Send another message</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-[#0c1818] mb-2">Name</label>
                                        <input required type="text" className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-100 focus:border-[#ff9d23] focus:ring-2 focus:ring-[#ff9d23]/20 transition-all outline-none" placeholder="Your Name" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-[#0c1818] mb-2">Email</label>
                                        <input required type="email" className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-100 focus:border-[#ff9d23] focus:ring-2 focus:ring-[#ff9d23]/20 transition-all outline-none" placeholder="Your Email" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-[#0c1818] mb-2">Subject</label>
                                    <input required type="text" className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-100 focus:border-[#ff9d23] focus:ring-2 focus:ring-[#ff9d23]/20 transition-all outline-none" placeholder="How can we help?" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-[#0c1818] mb-2">Message</label>
                                    <textarea required className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-100 focus:border-[#ff9d23] focus:ring-2 focus:ring-[#ff9d23]/20 transition-all outline-none min-h-[150px]" placeholder="Tell us more..."></textarea>
                                </div>
                                <button type="submit" className="w-full bg-[#0c1818] text-white py-5 rounded-2xl font-bold hover:bg-[#ff9d23] transition-all transform active:scale-[0.98] shadow-lg">
                                    Send Message
                                </button>
                            </form>
                        )}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#ff9d23]/10 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
