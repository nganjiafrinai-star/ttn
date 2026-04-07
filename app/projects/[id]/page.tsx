"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { projectData } from "../../data/projects";
import { notFound } from "next/navigation";
import { useState, useEffect, use } from "react";

type Params = Promise<{ id: string }>;

export default function ProjectDetailPage(props: { params: Params }) {
    const params = use(props.params);
    const id = params.id;
    
    const [project, setProject] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Build the full project list (static + local)
        const staticProject = projectData.find((p) => p.id === id);
        let customProject = null;
        
        const saved = localStorage.getItem("ttn_custom_projects");
        if (saved) {
            const customProjects = JSON.parse(saved);
            customProject = customProjects.find((p: any) => p.id === id);
        }

        const foundProject = customProject || staticProject;
        setProject(foundProject);
        setLoading(false);
    }, [id]);

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="w-12 h-12 border-4 border-[#ff9d23] border-t-transparent rounded-full animate-spin"></div>
        </div>
    );

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            
            <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
                <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center px-6">
                    <div className="bg-[#ff9d23] text-white text-xs font-black px-4 py-2 rounded-full uppercase tracking-widest mb-6 inline-block">
                        {project.label}
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight">
                        {project.title}
                    </h1>
                </div>
            </section>

            <section className="py-24 container mx-auto px-6 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-8">
                        <h2 className="text-3xl font-bold text-[#0c1818] mb-8">About the Project</h2>
                        <div className="space-y-6 text-gray-600 text-lg font-light leading-relaxed">
                            <p>{project.longDesc}</p>
                            <p>
                                At TTN Mission, we believe in sustainable development and direct hands-on impact. 
                                Our approach with {project.title} focuses on long-term growth and community 
                                empowerment.
                            </p>
                        </div>
                        
                        <div className="mt-16 bg-gray-50 rounded-[40px] p-8 md:p-12 border border-gray-100">
                           <h3 className="text-2xl font-bold mb-8 text-[#0087aa]">Our Impact</h3>
                           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                               {project.impact?.map((stat: string, i: number) => (
                                   <div key={i} className="flex flex-col gap-2">
                                       <div className="text-3xl font-black text-[#ff9d23]">{stat.split(' ')[0]}</div>
                                       <div className="text-gray-500 text-sm font-medium">{stat.split(' ').slice(1).join(' ')}</div>
                                   </div>
                               ))}
                           </div>
                        </div>
                    </div>

                    <div className="lg:col-span-4">
                        <div className="sticky top-32 space-y-8">
                            <div className="bg-[#0c1818] rounded-[30px] p-8 text-white shadow-2xl relative overflow-hidden">
                                <h3 className="text-2xl font-bold mb-4 relative z-10">Get Involved</h3>
                                <p className="text-white/60 mb-8 relative z-10 font-light">
                                    Your support makes {project.title} possible.
                                </p>
                                <div className="space-y-4 relative z-10">
                                    <Link href="/contact" className="block w-full bg-[#ff9d23] text-white py-4 rounded-2xl text-center font-bold hover:bg-[#e68a1f] transition-all">
                                        Support This Project
                                    </Link>
                                    <button className="block w-full border border-white/20 text-white py-4 rounded-2xl text-center font-bold hover:bg-white/10 transition-all">
                                        Volunteer
                                    </button>
                                </div>
                                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#ff9d23]/20 rounded-full blur-3xl"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
