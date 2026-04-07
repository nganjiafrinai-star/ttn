"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";

export default function DonatePage() {
    const [amount, setAmount] = useState<number | string>(50);
    const [frequency, setFrequency] = useState("monthly");
    const [step, setStep] = useState(1);

    const presets = [
        { val: 10, label: "Simple Meal", detail: "Provides a nutritious meal for a child in our porridge ministry." },
        { val: 50, label: "School Supplies", detail: "Covers books, uniforms, and stationary for a term." },
        { val: 100, label: "Family Support", detail: "Provides essential household support for a vulnerable family." },
        { val: 500, label: "Mission Partner", detail: "Supports sustainable long-term development projects." }
    ];

    return (
        <main className="min-h-screen bg-[#fcfcfc]">
            <Navbar />
            
            <div className="pt-32 pb-24 container mx-auto px-6 mt-10">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        
                        {/* Left: Content */}
                        <div className="space-y-8">
                            <div>
                                <h1 className="text-4xl md:text-7xl font-black text-[#0c1818] leading-tight mb-6">
                                    Fuel the <span className="text-[#ff9d23]">Future</span>
                                </h1>
                                <p className="text-gray-500 text-lg font-light leading-relaxed">
                                    Your contribution directly supports our mission to raise a genaration of purpose-driven young people. Every dollar translates into real-world impact in Kigali and beyond.
                                </p>
                            </div>

                            <div className="relative aspect-video rounded-[40px] overflow-hidden shadow-2xl">
                                <Image src="/ttn/i20.jpeg" alt="Donate TTN" fill className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6 text-white">
                                    <div className="text-sm font-bold uppercase tracking-widest opacity-80 mb-2">Our impact</div>
                                    <div className="text-2xl font-bold italic">"Because of you, I can dream again." — HOH Resident</div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white p-6 rounded-3xl border border-gray-100">
                                    <div className="text-[#0087aa] text-3xl font-black mb-1">100%</div>
                                    <div className="text-gray-400 text-xs font-bold uppercase tracking-widest">Goes to programs</div>
                                </div>
                                <div className="bg-white p-6 rounded-3xl border border-gray-100">
                                    <div className="text-[#ff9d23] text-3xl font-black mb-1">Secure</div>
                                    <div className="text-gray-400 text-xs font-bold uppercase tracking-widest">Encrypted payments</div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Donation Form */}
                        <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-gray-100 relative">
                            <div className="flex gap-2 mb-10 bg-gray-50 p-1.5 rounded-2xl">
                                <button 
                                    onClick={() => setFrequency("once")}
                                    className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${frequency === "once" ? "bg-white text-[#ff9d23] shadow-sm" : "text-gray-400 hover:text-gray-600"}`}
                                >
                                    One-time
                                </button>
                                <button 
                                    onClick={() => setFrequency("monthly")}
                                    className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 ${frequency === "monthly" ? "bg-white text-[#ff9d23] shadow-sm" : "text-gray-400 hover:text-gray-600"}`}
                                >
                                    Monthly <Heart size={14} className={frequency === "monthly" ? "fill-[#ff9d23]" : ""} />
                                </button>
                            </div>

                            <div className="space-y-8">
                                <div className="grid grid-cols-2 gap-4">
                                    {presets.map((p) => (
                                        <button 
                                            key={p.val}
                                            onClick={() => setAmount(p.val)}
                                            className={`p-6 rounded-3xl border-2 transition-all text-left ${amount === p.val ? "border-[#ff9d23] bg-[#ff9d23]/5 shadow-[0_8px_20px_-8px_rgba(255,157,35,0.4)]" : "border-gray-100 hover:border-gray-200"}`}
                                        >
                                            <div className="text-2xl font-black mb-1 text-[#0c1818]">${p.val}</div>
                                            <div className="text-[10px] font-black uppercase text-[#ff9d23] tracking-widest">{p.label}</div>
                                        </button>
                                    ))}
                                </div>

                                <div className="relative">
                                    <span className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl font-black text-gray-300">$</span>
                                    <input 
                                        type="number" 
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        className="w-full pl-12 pr-6 py-6 rounded-3xl bg-gray-50 border-none text-2xl font-black focus:ring-2 focus:ring-[#ff9d23]/20 outline-none" 
                                        placeholder="Other amount"
                                    />
                                </div>

                                <div className="p-6 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
                                    <p className="text-gray-500 text-sm font-medium italic">
                                        {presets.find(p => p.val === Number(amount))?.detail || "Your genarous contribution will change lives through our ministries."}
                                    </p>
                                </div>

                                <button className="w-full bg-[#0c1818] text-white py-6 rounded-[24px] text-lg font-bold shadow-2xl hover:bg-[#ff9d23] hover:scale-[1.02] transition-all transform active:scale-100">
                                    Continue to Payment
                                </button>

                                <div className="flex items-center justify-center gap-6 opacity-30 grayscale">
                                    <div className="font-bold text-xs uppercase tracking-widest text-black">Visa</div>
                                    <div className="font-bold text-xs uppercase tracking-widest text-black">Mastercard</div>
                                    <div className="font-bold text-xs uppercase tracking-widest text-black">Paypal</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
