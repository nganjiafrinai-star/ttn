"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

export default function AdminPage() {
    const [activeTab, setActiveTab] = useState("project");
    const [projects, setProjects] = useState<any[]>([]);
    const [stories, setStories] = useState<any[]>([]);

    useEffect(() => {
        const savedProjects = localStorage.getItem("ttn_custom_projects");
        const savedStories = localStorage.getItem("ttn_custom_stories");
        if (savedProjects) setProjects(JSON.parse(savedProjects));
        if (savedStories) setStories(JSON.parse(savedStories));
    }, []);

    const handleAddProject = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newProject = {
            id: formData.get("title")?.toString().toLowerCase().replace(/\s+/g, "-"),
            label: formData.get("label"),
            title: formData.get("title"),
            desc: formData.get("desc"),
            longDesc: formData.get("longDesc"),
            category: formData.get("category"),
            image: formData.get("image") || "/ttn/i20.jpeg",
            impact: [formData.get("impact1"), formData.get("impact2"), formData.get("impact3")].filter(Boolean)
        };
        const updated = [...projects, newProject];
        setProjects(updated);
        localStorage.setItem("ttn_custom_projects", JSON.stringify(updated));
        e.currentTarget.reset();
        alert("Project added to your browser storage!");
    };

    const handleAddStory = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newStory = {
            title: formData.get("title"),
            date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
            excerpt: formData.get("excerpt"),
            author: "By Admin",
            image: formData.get("image") || "/ttn/i24.jpeg"
        };
        const updated = [...stories, newStory];
        setStories(updated);
        localStorage.setItem("ttn_custom_stories", JSON.stringify(updated));
        e.currentTarget.reset();
        alert("Story added to your browser storage!");
    };

    const clearStorage = () => {
        if (confirm("Clear all custom items?")) {
            localStorage.removeItem("ttn_custom_projects");
            localStorage.removeItem("ttn_custom_stories");
            setProjects([]);
            setStories([]);
        }
    };

    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="pt-32 pb-24 container mx-auto px-6 max-w-4xl mt-10">
                <div className="flex justify-between items-center mb-12">
                    <div>
                        <h1 className="text-4xl font-black text-[#0c1818]">TTN <span className="text-[#ff9d23]">Dashboard</span></h1>
                        <p className="text-gray-500 font-light">Manage your website's projects and stories.</p>
                    </div>
                    <button onClick={clearStorage} className="text-red-500 text-xs font-bold uppercase tracking-widest hover:underline">Clear Custom Data</button>
                </div>

                {/* Tabs */}
                <div className="flex gap-4 mb-8 bg-white p-2 rounded-2xl shadow-sm inline-flex">
                    <button 
                        onClick={() => setActiveTab("project")}
                        className={`px-8 py-3 rounded-xl font-bold transition-all ${activeTab === "project" ? "bg-[#0087aa] text-white shadow-lg" : "text-gray-400 hover:text-gray-600"}`}
                    >
                        Projects
                    </button>
                    <button 
                        onClick={() => setActiveTab("story")}
                        className={`px-8 py-3 rounded-xl font-bold transition-all ${activeTab === "story" ? "bg-[#0087aa] text-white shadow-lg" : "text-gray-400 hover:text-gray-600"}`}
                    >
                        Stories
                    </button>
                </div>

                {/* Forms */}
                <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl border border-gray-100">
                    {activeTab === "project" ? (
                        <form onSubmit={handleAddProject} className="space-y-6">
                            <h3 className="text-2xl font-bold mb-6">Create New Project</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input name="title" required className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-[#0087aa]/20" placeholder="Project Title" />
                                <input name="label" required className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-[#0087aa]/20" placeholder="Short Label (e.g. NP-HOH)" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input name="category" required className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-[#0087aa]/20" placeholder="Category" />
                                <input name="image" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-[#0087aa]/20" placeholder="Image URL (empty for default)" />
                            </div>
                            <input name="desc" required className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-[#0087aa]/20" placeholder="Short Description" />
                            <textarea name="longDesc" required className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-[#0087aa]/20 min-h-[120px]" placeholder="Full Vision/Long Description"></textarea>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <input name="impact1" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-none outline-none" placeholder="Impact 1 (e.g. 150 Children)" />
                                <input name="impact2" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-none outline-none" placeholder="Impact 2" />
                                <input name="impact3" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-none outline-none" placeholder="Impact 3" />
                            </div>
                            <button type="submit" className="w-full bg-[#0c1818] text-white py-5 rounded-2xl font-bold hover:bg-[#ff9d23] transition-all shadow-xl">Post Project</button>
                        </form>
                    ) : (
                        <form onSubmit={handleAddStory} className="space-y-6">
                            <h3 className="text-2xl font-bold mb-6">Write New Story</h3>
                            <input name="title" required className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-[#0087aa]/20" placeholder="Story Title" />
                            <textarea name="excerpt" required className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-[#0087aa]/20 min-h-[120px]" placeholder="Short Excerpt"></textarea>
                            <input name="image" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-[#0087aa]/20" placeholder="Image URL (empty for default)" />
                            <button type="submit" className="w-full bg-[#0c1818] text-white py-5 rounded-2xl font-bold hover:bg-[#ff9d23] transition-all shadow-xl">Post Story</button>
                        </form>
                    )}
                </div>

                <div className="mt-12 p-8 bg-[#ff9d23]/10 rounded-[30px] border border-[#ff9d23]/20">
                    <h4 className="font-bold mb-2">Note on Persistence</h4>
                    <p className="text-sm text-gray-600 font-light leading-relaxed">
                        Currently, items added here are saved to your **Local Browser Storage**. This means only you can see them on this device. 
                        In a production build, these forms would connect to a database (like Firebase or Supabase) to make them visible to everyone.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
