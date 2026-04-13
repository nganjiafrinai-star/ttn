"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { projectData } from "../data/projects";
import { ArrowRight } from "lucide-react";

export default function ProjectsPage() {
    const [projects, setProjects] = useState(projectData);

    useEffect(() => {
        const saved = localStorage.getItem("ttn_custom_projects");
        if (saved) {
            setProjects([...projectData, ...JSON.parse(saved)]);
        }
    }, []);

    const [filter, setFilter] = useState("All");
    const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

    const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />
            
            <div className="pt-24 md:pt-32 pb-24 container mx-auto px-6">
                <div className="text-center mb-12 md:mb-16">
                    <h1 className="text-4xl md:text-7xl font-black text-[#0c1818] mb-6">Our <span className="text-[#0087aa]">Projects</span></h1>
                    <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
                        Discover the diverse ways we are impacting lives and building futures through our dedicated ministries.
                    </p>
                </div>
                
                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, i) => (
                        <div key={i} className="bg-white rounded-[32px] overflow-hidden border border-gray-100 group hover:-translate-y-2 transition-all duration-500">
                            <div className="relative h-64 overflow-hidden">
                                <Image 
                                    src={project.image?.trim() || "/ttn/i20.jpeg"} 
                                    alt={project.title} 
                                    fill 
                                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                                />
                                <div className="absolute top-4 left-4 bg-[#ff9d23] text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider">{project.label}</div>
                            </div>
                            <div className="p-8">
                                <span className="text-[#0087aa] text-xs font-bold uppercase tracking-widest mb-2 block">{project.category}</span>
                                <h3 className="text-2xl font-bold mb-4 text-[#0c1818]">{project.title}</h3>
                                <p className="text-gray-500 font-light text-sm mb-6 leading-relaxed">{project.desc}</p>
                                <Link href={`/projects/${project.id}`} className="w-full py-4 border-2 border-slate-100 rounded-2xl text-slate-800 text-center font-bold hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                                    Learn More
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
