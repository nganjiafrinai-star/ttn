"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
    User, 
    Mail, 
    Phone, 
    MapPin, 
    Heart, 
    Zap, 
    Star, 
    ArrowRight, 
    CheckCircle2, 
    ChevronRight,
    Camera
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function JoinMissionPage() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        location: "",
        interests: [] as string[],
        expertise: "",
        vision: "",
        representingOrg: "no"
    });

    const steps = [
        { id: 1, name: "Identity", icon: <User size={18} /> },
        { id: 2, name: "Mission Fit", icon: <Heart size={18} /> },
        { id: 3, name: "Intent", icon: <Zap size={18} /> }
    ];

    const toggleInterest = (interest: string) => {
        setFormData(prev => ({
            ...prev,
            interests: prev.interests.includes(interest) 
                ? prev.interests.filter(i => i !== interest)
                : [...prev.interests, interest]
        }));
    };

    const nextStep = () => setStep(prev => Math.min(prev + 1, 3));
    const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

    return (
        <main className="min-h-screen bg-[#f8fafc] flex flex-col">
            <Navbar />
            
            {/* Background Decorations */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#ff9d23]/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#0087aa]/5 rounded-full blur-[120px]"></div>
            </div>

            <div className="flex-grow pt-32 pb-24 relative z-10">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        
                        {/* Header */}
                        <div className="text-center mb-12">
                            <h1 className="text-4xl md:text-6xl font-black text-[#0c1818] mb-4 tracking-tight">
                                Join The <span className="text-[#0087aa]">Mission</span>
                            </h1>
                            <p className="text-gray-500 font-light text-lg max-w-2xl mx-auto leading-relaxed">
                                Step into a community dedicated to raising a purpose-driven generation. 
                                Your skills and heart can change lives in Burundi and beyond.
                            </p>
                        </div>

                        {/* Form Container */}
                        <div className="bg-white rounded-[40px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden flex flex-col md:flex-row min-h-[700px]">
                            
                            {/* Left Sidebar (Progress) - Desktop Only */}
                            <div className="hidden md:flex flex-col bg-[#0c1818] w-72 p-10 text-white relative">
                                <div className="mb-12 relative z-10">
                                    <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 text-sm">
                                        <ArrowRight size={14} className="rotate-180" /> Back to Home
                                    </Link>
                                    <h3 className="text-2xl font-black tracking-tight leading-tight uppercase">Registration <br /><span className="text-[#ff9d23]">Process</span></h3>
                                </div>

                                <div className="space-y-10 relative z-10">
                                    {steps.map((s) => (
                                        <div key={s.id} className="flex gap-4 items-center group cursor-default">
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ring-4 ${
                                                step >= s.id 
                                                    ? "bg-[#ff9d23] ring-[#ff9d23]/20 shadow-[0_0_20px_rgba(255,157,35,0.4)]" 
                                                    : "bg-white/5 ring-white/5 text-white/40"
                                            }`}>
                                                {step > s.id ? <CheckCircle2 size={18} /> : s.icon}
                                            </div>
                                            <div className="flex flex-col">
                                                <span className={`text-[10px] uppercase tracking-widest font-bold ${step >= s.id ? "text-[#ff9d23]" : "text-white/30"}`}>Step {s.id}</span>
                                                <span className={`text-sm font-bold ${step >= s.id ? "text-white" : "text-white/40"}`}>{s.name}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Abstract shapes */}
                                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#0087aa]/10 to-transparent pointer-events-none"></div>
                                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#ff9d23] rounded-full opacity-10 blur-3xl pointer-events-none"></div>
                            </div>

                            {/* Main Form Content */}
                            <div className="flex-1 p-8 md:p-16 relative">
                                
                                {/* Step Indicator - Mobile Only */}
                                <div className="flex md:hidden justify-between items-center mb-10 border-b border-gray-100 pb-4">
                                    <span className="text-xs font-black uppercase tracking-widest text-[#0087aa]">Step {step} of 3</span>
                                    <div className="flex gap-1">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${step >= i ? "bg-[#ff9d23] w-6" : "bg-gray-100 w-3"}`}></div>
                                        ))}
                                    </div>
                                </div>

                                {/* Step 1: Identity */}
                                {step === 1 && (
                                    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                                        <div className="flex justify-between items-start mb-10">
                                            <div>
                                                <h2 className="text-3xl font-black text-[#0c1818] mb-2">Basic Details</h2>
                                                <p className="text-gray-400 font-light">Tell us who you are.</p>
                                            </div>
                                            <div className="relative group">
                                                <div className="w-20 h-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-400 group-hover:border-[#0087aa] group-hover:text-[#0087aa] transition-all cursor-pointer overflow-hidden">
                                                    <Camera size={20} />
                                                    <span className="text-[10px] mt-1 font-bold uppercase">Add Photo</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-[11px] font-black uppercase tracking-[0.15em] text-gray-400 ml-1">Full Name</label>
                                                    <div className="relative">
                                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                                                        <input 
                                                            type="text" 
                                                            placeholder="Enter Full Name" 
                                                            className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#0087aa]/20 transition-all font-medium text-sm placeholder:text-gray-400 placeholder:font-light"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-[11px] font-black uppercase tracking-[0.15em] text-gray-400 ml-1">Email Address</label>
                                                    <div className="relative">
                                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                                                        <input 
                                                            type="email" 
                                                            placeholder="your@email.com" 
                                                            className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#0087aa]/20 transition-all font-medium text-sm placeholder:text-gray-400 placeholder:font-light"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-[11px] font-black uppercase tracking-[0.15em] text-gray-400 ml-1">Phone Number</label>
                                                    <div className="relative">
                                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                                                        <input 
                                                            type="tel" 
                                                            placeholder="+257..." 
                                                            className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#0087aa]/20 transition-all font-medium text-sm placeholder:text-gray-400 placeholder:font-light"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-[11px] font-black uppercase tracking-[0.15em] text-gray-400 ml-1">Location</label>
                                                    <div className="relative">
                                                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                                                        <input 
                                                            type="text" 
                                                            placeholder="City, Country" 
                                                            className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#0087aa]/20 transition-all font-medium text-sm placeholder:text-gray-400 placeholder:font-light"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Step 2: Mission Fit */}
                                {step === 2 && (
                                    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                                        <div className="mb-10">
                                            <h2 className="text-3xl font-black text-[#0c1818] mb-2">Mission Fit</h2>
                                            <p className="text-gray-400 font-light">How do you envision contributing?</p>
                                        </div>

                                        <div className="space-y-8">
                                            <div className="space-y-4">
                                                <label className="text-[11px] font-black uppercase tracking-[0.15em] text-gray-400 ml-1">Areas of Interest</label>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                    {[
                                                        "Child Mentorship", 
                                                        "Gospel Outreach", 
                                                        "Skill Training (Art/Music)",
                                                        "Academic Tutoring",
                                                        "Community Development",
                                                        "Health/Wellness",
                                                        "Professional Services",
                                                        "Environmental Care"
                                                    ].map((item) => (
                                                        <button
                                                            key={item}
                                                            onClick={() => toggleInterest(item)}
                                                            className={`text-left px-5 py-4 rounded-2xl text-xs font-bold transition-all border-2 ${
                                                                formData.interests.includes(item)
                                                                    ? "bg-[#0087aa]/5 border-[#0087aa] text-[#0087aa]"
                                                                    : "bg-white border-gray-100 text-gray-500 hover:border-gray-200"
                                                            }`}
                                                        >
                                                            <div className="flex items-center justify-between">
                                                                {item}
                                                                {formData.interests.includes(item) && <Star size={14} fill="#0087aa" />}
                                                            </div>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-[11px] font-black uppercase tracking-[0.15em] text-gray-400 ml-1">Primary Expertise</label>
                                                <select className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#0087aa]/20 transition-all font-medium text-sm appearance-none">
                                                    <option>Select your field</option>
                                                    <option>Education</option>
                                                    <option>Medicine / Healthcare</option>
                                                    <option>Business / Finance</option>
                                                    <option>Arts / Design</option>
                                                    <option>Technology / Engineering</option>
                                                    <option>Ministry / Counseling</option>
                                                    <option>Agriculture</option>
                                                    <option>Other</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Step 3: Intent */}
                                {step === 3 && (
                                    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                                        <div className="mb-10">
                                            <h2 className="text-3xl font-black text-[#0c1818] mb-2">Intent & Vision</h2>
                                            <p className="text-gray-400 font-light">Share your heart for the mission.</p>
                                        </div>

                                        <div className="space-y-8">
                                            <div className="space-y-2">
                                                <label className="text-[11px] font-black uppercase tracking-[0.15em] text-gray-400 ml-1">Vision Statement</label>
                                                <textarea 
                                                    placeholder="How would you like to contribute to building a future of hope? Share your vision here..." 
                                                    className="w-full px-6 py-5 bg-gray-50 border-none rounded-[30px] focus:ring-2 focus:ring-[#0087aa]/20 transition-all font-medium text-sm min-h-[180px] placeholder:text-gray-400 placeholder:font-light leading-relaxed"
                                                ></textarea>
                                            </div>

                                            <div className="flex items-center gap-6 p-6 bg-[#f0f8fa] rounded-3xl">
                                                <div className="w-12 h-12 rounded-full bg-[#0087aa]/10 flex items-center justify-center text-[#0087aa]">
                                                    <Zap size={22} />
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="text-sm font-black text-[#0c1818] uppercase tracking-tight">Ready to make an impact?</h4>
                                                    <p className="text-[11px] text-[#0087aa] font-bold uppercase mt-0.5">By submitting, you agree to our spiritual & community guidelines.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Navigation Buttons */}
                                <div className="mt-16 flex items-center justify-between gap-4">
                                    {step > 1 ? (
                                        <button 
                                            onClick={prevStep}
                                            className="px-8 py-4 rounded-2xl text-sm font-black uppercase tracking-widest text-gray-400 hover:text-[#0c1818] transition-colors"
                                        >
                                            Back
                                        </button>
                                    ) : <div />}

                                    <button 
                                        onClick={step === 3 ? undefined : nextStep}
                                        className="group relative flex-1 md:flex-none"
                                    >
                                        <div className="absolute inset-0 bg-[#0087aa] rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                        <div className="relative bg-[#0c1818] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-[12px] flex items-center justify-center gap-3 hover:bg-[#0087aa] transition-all duration-500 overflow-hidden">
                                            <span className="relative z-10">{step === 3 ? "Submit Registration" : "Save & Continue"}</span>
                                            {step < 3 && <ChevronRight size={18} className="relative z-10" />}
                                            <div className="absolute inset-x-0 bottom-0 h-1 bg-[#ff9d23] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Footer Note */}
                        <p className="text-center mt-12 text-gray-400 text-xs font-light tracking-wide uppercase">
                            Already a mission member? <Link href="/login" className="text-[#0087aa] font-bold hover:underline">Sign In here</Link>
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
