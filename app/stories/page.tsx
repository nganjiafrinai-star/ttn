"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function StoriesPage() {
    const staticStories = [
        {
            title: "Transformation through Talent Development",
            date: "October 12, 2023",
            excerpt: "How a simple soccer club became a path to education and discipline for youth in Kigali.",
            image: "/ttn/i20.jpeg",
            author: "By Jean-Claude"
        },
        {
            title: "Building Homes of Hope",
            date: "September 24, 2023",
            excerpt: "A look inside our newest orphanage home and the children finding safety here.",
            image: "/ttn/i24.jpeg",
            author: "By Sarah M."
        },
        {
            title: "Impact of the Porridge Ministry",
            date: "August 15, 2023",
            excerpt: "Addressing hunger is the first step toward intellectual and spiritual growth.",
            image: "/ttn/i3.jpeg",
            author: "By Pastor David"
        }
    ];

    const [stories, setStories] = useState(staticStories);

    useEffect(() => {
        const saved = localStorage.getItem("ttn_custom_stories");
        if (saved) {
            setStories([...staticStories, ...JSON.parse(saved)]);
        }
    }, []);

    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            
            <div className="pt-32 pb-24 container mx-auto px-6 mt-10">
                <div className="text-center mb-20">
                    <h1 className="script-font text-5xl md:text-8xl text-[#ff9d23] mb-4">Our Stories</h1>
                    <h2 className="text-3xl md:text-5xl font-black text-[#0c1818]">Movement of <span className="text-[#0087aa]">Hope</span></h2>
                </div>

                <div className="max-w-5xl mx-auto space-y-16">
                    {stories.map((story, i) => (
                        <div key={i} className="group grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
                            <div className="md:col-span-5 relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl">
                                <Image 
                                    src={story.image?.trim() || "/ttn/i20.jpeg"} 
                                    alt={story.title} 
                                    fill 
                                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                                />
                            </div>
                            <div className="md:col-span-7">
                                <div className="flex items-center gap-4 text-sm text-[#ff9d23] font-bold uppercase tracking-widest mb-4">
                                    <span>{story.date}</span>
                                    <span className="w-8 h-[1px] bg-gray-200"></span>
                                    <span className="text-gray-400">{story.author}</span>
                                </div>
                                <h3 className="text-2xl md:text-4xl font-bold text-[#0c1818] mb-6 group-hover:text-[#0087aa] transition-colors leading-tight">
                                    {story.title}
                                </h3>
                                <p className="text-gray-500 font-light text-lg leading-relaxed mb-8">
                                    {story.excerpt}
                                </p>
                                <button className="flex items-center gap-2 text-[#0c1818] font-bold group-hover:gap-4 transition-all">
                                    Read Full Story
                                    <svg className="w-5 h-5 text-[#ff9d23]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M13 7l5 5m0 0l-5 5m5-5H6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <button className="bg-[#0c1818] text-white px-12 py-5 rounded-full font-bold hover:bg-[#ff9d23] transition-all shadow-xl">
                        Load More Stories
                    </button>
                </div>
            </div>

            <Footer />
        </main>
    );
}
