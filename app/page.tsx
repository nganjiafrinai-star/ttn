"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center">
            <a href="#home" className="relative w-12 h-12 md:w-16 md:h-16 transition-transform hover:scale-105 active:scale-95">
               <Image
                 src="/logo.png"
                 alt="TTN Logo"
                 fill
                 className="object-contain"
                 priority
               />
            </a>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {["Home", "About", "Our Story", "Programs", "Impact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className={`text-sm font-medium hover:text-[#ff9d23] transition-colors ${scrolled ? "text-[#0c1818]" : "text-white"}`}>
                {item}
              </a>
            ))}
            <button className="bg-[#ff9d23] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#e68a1f] transition-all shadow-md">
              Donate Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={scrolled ? "text-[#0c1818]" : "text-white"}>
              {mobileMenuOpen ? "✕" : "☰"}
            </span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 min-h-screen bg-black/95 z-[150] flex flex-col transition-all duration-700 ease-in-out md:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex justify-between items-center p-6 border-b border-white/10">
            <div className="relative w-10 h-10">
               <Image src="/logo.png" alt="Logo" fill className="object-contain" />
            </div>
            <button onClick={() => setMobileMenuOpen(false)} className="text-white text-3xl">✕</button>
          </div>
          
          <div className="flex flex-col items-center justify-center flex-grow gap-8">
            {[
              { name: "Home", id: "home" },
              { name: "About Us", id: "about" },
              { name: "Global Goals", id: "story" },
              { name: "Our Programs", id: "programs" },
              { name: "Our Impact", id: "impact" },
              { name: "Donation", id: "donation" }
            ].map((item, i) => (
              <a 
                key={i} 
                href={`#${item.id}`} 
                className={`text-white text-4xl font-black uppercase tracking-tighter hover:text-[#ff9d23] transition-all transform ${mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            
            <button className="bg-[#ff9d23] text-white px-12 py-4 rounded-full text-xl font-bold mt-8 shadow-2xl hover:scale-105 transition-transform">
              Donate Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/image 1.png"
          alt="TTN Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <h1 className="text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-8 drop-shadow-2xl">
            Empowering Children to <br />
            Discover their <span className="script-font text-[#ff9d23] italic wavy-underline">Purpose.</span>
          </h1>
          <p className="text-white/80 text-lg md:text-2xl font-light italic mb-10 max-w-3xl mx-auto border-l-4 border-l-[#ff9d23] pl-6 bg-black/20 backdrop-blur-sm py-4 rounded-r-xl">
             "You cannot help everyone but you can help someone, you cannot do everything but you can do something."
          </p>
          
          <div className="flex gap-3 justify-center mt-12 md:mt-16">
            <span className="w-2.5 h-2.5 rounded-full bg-white/40 ring-1 ring-white/10"></span>
            <span className="w-6 md:w-8 h-2.5 rounded-full bg-[#0087aa] ring-1 ring-[#0087aa]/30"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-white/40 ring-1 ring-white/10"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-white/40 ring-1 ring-white/10"></span>
          </div>
        </div>
        
        {/* Decorative Circle Link */}
        <div className="absolute bottom-12 right-12 w-32 h-32 bg-[#0087aa] rounded-full flex items-center justify-center animate-float hidden lg:flex">
          <span className="text-white text-center font-bold text-sm leading-tight">Join Our <br /> Mission</span>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-12 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-0 rounded-[20px] md:rounded-[40px] overflow-hidden shadow-2xl">
            {/* Left Column: White with Cross Pattern */}
            <div className="lg:w-1/2 relative bg-white min-h-[350px] md:min-h-[500px] p-8 md:p-20 flex flex-col items-center justify-center overflow-hidden">
               {/* Cross/Plus Pattern Background */}
               <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px), radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '30px 30px', backgroundPosition: '0 0, 15px 15px' }}></div>
               
               {/* About Us Header */}
               <div className="absolute top-6 left-6 md:top-12 md:left-12 flex items-center gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 border-2 border-[#0c1818] rounded-full flex items-center justify-center p-1">
                    <Image src="/logo.png" alt="TTN" width={30} height={30} className="object-contain grayscale" />
                  </div>
                  <h2 className="script-font text-2xl md:text-3xl font-bold text-[#0c1818] italic">About Us</h2>
               </div>

               <div className="relative z-10 w-full max-w-sm md:max-w-md mt-10 md:mt-0">
                  {/* Orange Corner Brackets */}
                  <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-8 h-8 md:w-12 md:h-12 border-t-4 md:border-t-8 border-l-4 md:border-l-8 border-[#ff9d23] rounded-tl-lg md:rounded-tl-xl"></div>
                  <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-8 h-8 md:w-12 md:h-12 border-t-4 md:border-t-8 border-r-4 md:border-r-8 border-[#ff9d23] rounded-tr-lg md:rounded-tr-xl"></div>
                  <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-8 h-8 md:w-12 md:h-12 border-b-4 md:border-b-8 border-l-4 md:border-l-8 border-[#ff9d23] rounded-bl-lg md:rounded-bl-xl"></div>
                  <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-8 h-8 md:w-12 md:h-12 border-b-4 md:border-b-8 border-r-4 md:border-r-8 border-[#ff9d23] rounded-br-lg md:rounded-br-xl"></div>

                  {/* Main Image */}
                  <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border-[8px] md:border-[15px] border-white shadow-2xl">
                     <Image
                       src="/about 1.png"
                       alt="TTN Team"
                       width={800}
                       height={600}
                       className="object-cover w-full h-auto aspect-[4/3]"
                     />
                  </div>
               </div>
            </div>
            
            {/* Right Column: Dark Grey Timeline */}
            <div className="lg:w-1/2 bg-[#1a1a1a] p-8 md:p-24 text-white relative flex flex-col justify-center min-h-[500px] md:min-h-[600px]">
               {/* Sketchy Arrow Top Left */}
                <div className="absolute top-6 left-6 md:top-10 md:left-10 text-[#0087aa] opacity-60">
                   <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 md:w-11 md:h-11">
                    <path d="M30 70 L50 90 L70 70 M50 90 L50 30" strokeDasharray="2 4" opacity="0.5" />
                    <path d="M20 50 L50 80 L80 50" />
                    <path d="M20 30 L50 60 L80 30" />
                  </svg>
               </div>

               <div className="relative z-10 space-y-12 md:space-y-24 mt-8 md:mt-0">
                  {/* Hand-Drawn Styled Vertical Line - Adjusted for mobile */}
                  <div className="absolute top-4 left-[15px] md:left-[19px] bottom-10 w-1 bg-[#0087aa] opacity-20 rounded-full blur-[0.5px]"></div>
                  <div className="absolute top-4 left-[15px] md:left-[19px] bottom-10 w-[1px] bg-[#0087aa] opacity-40"></div>

                  {/* Who We Are */}
                  <div className="relative pl-12 md:pl-16">
                     <div className="absolute top-0 left-0 w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#0087aa] bg-[#1a1a1a] flex items-center justify-center shadow-[0_0_15px_rgba(0,183,212,0.2)]">
                        <div className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full bg-[#0087aa] shadow-inner"></div>
                     </div>
                     <h3 className="text-2xl md:text-4xl font-bold text-[#0087aa] mb-3 md:mb-5 tracking-tight">Who We Are</h3>
                     <p className="text-gray-300 font-light leading-relaxed max-w-lg text-sm md:text-base">
                        TTN Mission is a community-based organization dedicated to every generation. 
                        Whether you are just beginning your journey or deepening it, you belong here. We 
                        believe that transformation is for everyone — young and old, seeker and servant alike.
                     </p>
                  </div>

                  {/* Our Vision */}
                  <div className="relative pl-12 md:pl-16">
                     <div className="absolute top-0 left-0 w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#0087aa] bg-[#1a1a1a] flex items-center justify-center shadow-[0_0_15px_rgba(0,183,212,0.2)]">
                        <div className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full bg-[#0087aa] shadow-inner"></div>
                     </div>
                     <h3 className="text-2xl md:text-4xl font-bold text-[#0087aa] mb-3 md:mb-5 tracking-tight">Our Vision</h3>
                     <p className="text-gray-300 font-light leading-relaxed max-w-lg text-sm md:text-base">
                        A world transformed by the gospel and free from poverty.
                     </p>
                  </div>

                  {/* Our Mission */}
                  <div className="relative pl-12 md:pl-16">
                     <div className="absolute top-0 left-0 w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#0087aa] bg-[#1a1a1a] flex items-center justify-center shadow-[0_0_15px_rgba(0,183,212,0.2)]">
                        <div className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full bg-[#0087aa] shadow-inner"></div>
                     </div>
                     <h3 className="text-2xl md:text-4xl font-bold text-[#0087aa] mb-3 md:mb-5 tracking-tight">Our Mission</h3>
                     <p className="text-gray-300 font-light leading-relaxed max-w-lg text-sm md:text-base">
                        To provide children and young people with an environment of opportunities 
                        to live with hope, grow in faith, develop their skills and discover their purpose.
                     </p>
                  </div>
               </div>

               {/* Dot Grid Decoration Bottom Right */}
               <div className="absolute bottom-12 right-24 opacity-10 grid grid-cols-8 gap-3">
                  {[...Array(32)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-white"></div>
                  ))}
               </div>
               
               {/* Sketchy Arrow Bottom Right */}
               <div className="absolute bottom-10 right-10 text-[#0087aa] opacity-60">
                  <svg width="35" height="35" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="rotate-[135deg]">
                    <path d="M20 50 L50 80 L80 50" />
                    <path d="M20 30 L50 60 L80 30" />
                  </svg>
               </div>
            </div>
          </div>
          
          {/* Orange Circle Decoration */}
          <div className="w-48 h-48 md:w-64 md:h-64 bg-[#ff9d23] rounded-full absolute -left-20 md:-left-32 -bottom-20 md:-bottom-32 z-0 opacity-20 md:opacity-100"></div>
        </div>
      </section>
      {/* Story & Global Goals Section */}
      <section id="story" className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
               {/* Left side: Founder Image */}
               <div className="relative order-2 lg:order-1">
                 {/* Decorative background shape */}
                 <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#0087aa]/10 rounded-full blur-3xl"></div>
                 <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-[#ff9d23]/10 rounded-full blur-3xl"></div>
                 
                 {/* Founder Image Wrapper */}
                 <div className="relative rounded-[30px] md:rounded-[40px] overflow-hidden border-4 md:border-8 border-white p-2 md:p-4 bg-white shadow-lg rotate-[-1deg] md:rotate-[-2deg] mx-auto max-w-[400px] lg:max-w-none">
                   <Image 
                     src="/tuto 1.png"
                     alt="Founder"
                     width={500}
                     height={600}
                     className="object-cover w-full h-auto aspect-[4/5] rounded-[20px] md:rounded-[30px]"
                   />
                   <div className="absolute bottom-10 left-10 text-white z-10">
                      <h4 className="text-2xl font-black drop-shadow-md">Akilimali</h4>
                      <p className="text-[#ff9d23] font-bold drop-shadow-md">Founder, TTN Mission</p>
                   </div>
                   <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent"></div>
                 </div>
               </div>
               
               {/* Right side: Global Goals */}
               <div className="order-1 lg:order-2">
                 <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-1 bg-[#ff9d23] rounded-full"></div>
                    <span className="text-[#ff9d23] font-black uppercase tracking-[0.2em] text-[10px] md:text-base">Strategic Intent</span>
                 </div>
                 <h2 className="text-3xl md:text-6xl font-black text-[#0c1818] leading-tight mb-8">
                   Our <span className="text-[#0087aa]">Global Goals</span>
                 </h2>
                 
                 <div className="space-y-6">
                    {[
                      { title: "Discipleship Multiplication", desc: "Go, Teach them to obey all I have recommended you." },
                      { title: "Orphans Care", desc: "Providing support and family for the fatherless." },
                      { title: "Talent Development", desc: "Identifying and nurturing creative and athletic skills." },
                      { title: "Intellectual Capacity", desc: "Developing analytical and academic abilities." },
                      { title: "Empowerment Support", desc: "For vulnerable women and youth." }
                    ].map((goal, i) => (
                      <div key={i} className="flex gap-4 group">
                         <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white shadow-md flex items-center justify-center text-[#ff9d23] font-bold group-hover:bg-[#ff9d23] group-hover:text-white transition-all duration-300">
                            {i + 1}
                         </div>
                         <div>
                            <h4 className="text-lg font-bold text-[#0c1818] group-hover:text-[#0087aa] transition-colors">{goal.title}</h4>
                            <p className="text-gray-500 font-light text-sm">{goal.desc}</p>
                         </div>
                      </div>
                    ))}
                 </div>
               </div>
           </div>

           {/* Core Values Section (Internal but distinct) */}
           <div className="bg-[#0087aa] rounded-[30px] md:rounded-[40px] p-8 md:p-16 text-white text-center shadow-xl">
             <h3 className="text-2xl md:text-5xl font-black mb-10 md:mb-12 uppercase tracking-tight">Our Core Values</h3>
             <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
               {["Faith", "Vision", "Hardwork", "Unity", "Responsibility"].map((value, i) => (
                 <div key={i} className="flex flex-col items-center gap-4 group">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-3xl group-hover:bg-white group-hover:text-[#0087aa] transition-all duration-300">
                       {i === 0 && "✝"} {i === 1 && "👁"} {i === 2 && "💪"} {i === 3 && "🤝"} {i === 4 && "⚡"}
                    </div>
                    <span className="font-bold uppercase tracking-widest text-sm">{value}</span>
                 </div>
               ))}
             </div>
           </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
             <div className="w-8 h-8 rounded-full border-2 border-[#ff9d23] flex items-center justify-center text-[#ff9d23] font-bold">★</div>
             <span className="text-[#ff9d23] font-black uppercase tracking-[0.2em] text-sm md:text-base">Our Framework</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-[#0c1818] mb-8 leading-tight">
            Our <span className="text-[#0087aa]">Programs</span>
          </h2>
          <p className="text-gray-400 font-light text-lg md:text-xl max-w-3xl mx-auto mb-16">
            Our framework is divided into three key pillars to ensure a holistic approach to child development and community empowerment.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Kids Outreach", 
                image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop",
                desc: "Ministries focused on the most vulnerable children: NP-HOH (Homes of Hope), PM (Porridge Ministry), and SMS (Send Me to School)." 
              },
              { 
                title: "Multiplication", 
                image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop",
                desc: "Discipleship and Leadership frameworks: TD (Talent), ICD (Intellectual Capacity), and NPL (Legacy)." 
              },
              { 
                title: "Development", 
                image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop",
                desc: "Frameworks for Women and Youth sustainable growth: FAB (Financial), and LP (Leadership)." 
              }
            ].map((program, i) => (
              <div key={i} className="bg-white rounded-[30px] md:rounded-[40px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <Image src={program.image} alt={program.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-6 md:p-8 text-left border-b-8 border-transparent group-hover:border-[#0087aa] transition-all">
                  <h4 className="text-xl font-bold text-[#0087aa] mb-3 uppercase tracking-tight">{program.title}</h4>
                  <p className="text-gray-500 font-light text-sm leading-relaxed">{program.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ministries/Projects Section */}
      <section className="py-24 bg-[#0c1818] text-white">
        <div className="container mx-auto px-6">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6 md:gap-8">
              <div className="max-w-2xl text-left">
                 <h2 className="text-3xl md:text-6xl font-black leading-tight">
                    Specific <span className="text-[#ff9d23]">Ministries</span> <br/> & Projects
                 </h2>
              </div>
              <div className="text-gray-400 font-light text-base md:text-lg">
                 Direct hands-on impact on the ground.
              </div>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: "NP-HOH", title: "Homes of Hope", desc: "Providing safe and loving homes through our orphanages." },
                { label: "PM", title: "Porridge Ministry", desc: "Critical feeding programs for hungry children." },
                { label: "SMS", title: "Send Me to School", desc: "Providing essential school materials and tuition fees." },
                { label: "TD", title: "Talent Development", desc: "Clubs for Soccer, Basketball, Music, Drawing & English." }
              ].map((project, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all group">
                   <div className="text-[#ff9d23] font-black text-xl mb-4 opacity-50">{project.label}</div>
                   <h4 className="text-2xl font-bold mb-4 group-hover:text-[#0087aa] transition-colors">{project.title}</h4>
                   <p className="text-gray-400 font-light text-sm leading-relaxed">{project.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-16 md:py-24 bg-white relative overflow-hidden">
         <div className="absolute top-0 right-0 w-1/2 md:w-1/3 h-full overflow-hidden opacity-5 pointer-events-none">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#0087aa" d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,77.3,-44.7C85.4,-31.3,90.5,-15.7,89.5,-0.5C88.6,14.6,81.7,29.3,72,42.3C62.3,55.4,49.8,66.8,35.6,74.5C21.4,82.2,5.5,86.2,-10.1,84.5C-25.7,82.8,-41,75.4,-54,65.9C-67,56.4,-77.7,44.7,-84.3,31.2C-90.9,17.7,-93.4,2.3,-90.6,-12.3C-87.8,-26.9,-79.6,-40.7,-68.4,-51.7C-57.2,-62.7,-43,-70.9,-28.9,-77.6C-14.8,-84.3,-0.7,-89.5,14.4,-87.1C29.5,-84.7,44.7,-76.4,44.7,-76.4Z" transform="translate(100 100)" />
            </svg>
         </div>
         <div className="container mx-auto px-6 text-center">
           <h2 className="script-font text-[#0c1818] text-3xl md:text-5xl mb-16 md:mb-32 relative inline-block">
             Our Growing <span className="text-[#0087aa] wavy-underline italic underline decoration-transparent">Impact</span>
           </h2>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
               <div className="space-y-3 md:space-y-6">
                  <h3 className="text-5xl md:text-8xl font-black text-[#0c1818] drop-shadow-sm">24+</h3>
                  <p className="text-gray-400 uppercase tracking-[0.1em] md:tracking-[0.3em] text-[10px] md:text-xs font-semibold">Children Reached</p>
               </div>
               <div className="space-y-3 md:space-y-6">
                  <h3 className="text-5xl md:text-8xl font-black text-[#0c1818] drop-shadow-sm">20</h3>
                  <p className="text-gray-400 uppercase tracking-[0.1em] md:tracking-[0.3em] text-[10px] md:text-xs font-semibold">Community Served</p>
               </div>
               <div className="space-y-3 md:space-y-6">
                  <h3 className="text-5xl md:text-8xl font-black text-[#0c1818] drop-shadow-sm">10+</h3>
                  <p className="text-gray-400 uppercase tracking-[0.1em] md:tracking-[0.3em] text-[10px] md:text-xs font-semibold">Running Programs</p>
               </div>
            </div>
         </div>
      </section>

      {/* Donation Section */}
      <section id="donation" className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6 text-center">
           <h2 className="script-font text-[#0c1818] text-3xl md:text-5xl mb-8 md:mb-16 relative inline-block wavy-underline decoration-transparent">
             Donation
           </h2>
           <p className="text-gray-500 max-w-3xl mx-auto mb-12 md:mb-20 leading-relaxed font-light text-sm md:text-base">
             By donating you help our mission and help global children. Discovering our purpose and building impact toward a peaceful world where transformed lives nurture other within sustainable and healthy environments.
           </p>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
              {/* Bank Card */}
              <div className="bg-[#f0f8fa] rounded-[25px] md:rounded-[30px] p-8 md:p-10 text-left relative overflow-hidden group hover:shadow-lg transition-all">
                 <div className="flex items-center gap-3 mb-6">
                    <span className="text-[#0087aa] text-xl">🏦</span>
                    <h4 className="font-bold text-lg md:text-xl text-[#0c1818]">Bank Transfer</h4>
                 </div>
                 <div className="space-y-3 text-gray-600 font-light text-sm">
                    <p className="flex justify-between border-b border-black/5 pb-2"><span>Account:</span> <span className="font-medium text-[#0c1818]">TTN Mission</span></p>
                    <p className="flex justify-between border-b border-black/5 pb-2"><span>Bank:</span> <span className="font-medium text-[#0c1818]">EcoBank Burundi</span></p>
                    <p className="flex flex-col gap-1 border-b border-black/5 pb-2"><span>Number:</span> <span className="font-medium text-[#0c1818]">130284451739101</span></p>
                    <p className="flex justify-between"><span>SWIFT:</span> <span className="font-medium text-[#0c1818]">1118182741</span></p>
                 </div>
              </div>
              
              {/* Mobile Money Card */}
              <div className="bg-[#f0f8fa] rounded-[25px] md:rounded-[30px] p-8 md:p-10 text-left relative overflow-hidden group hover:shadow-lg transition-all">
                 <div className="flex items-center gap-3 mb-6">
                    <span className="text-[#0087aa] text-xl">📱</span>
                    <h4 className="font-bold text-lg md:text-xl text-[#0c1818]">Mobile Money</h4>
                 </div>
                 <div className="space-y-3 text-gray-600 font-light text-sm">
                    <p className="flex justify-between border-b border-black/5 pb-2"><span>Provider:</span> <span className="font-medium text-[#0c1818]">Lumicash</span></p>
                    <p className="flex justify-between border-b border-black/5 pb-2"><span>Name:</span> <span className="font-medium text-[#0c1818]">TTN Mission</span></p>
                    <p className="flex justify-between"><span>Number:</span> <span className="font-medium text-[#0c1818]">+257 69022421</span></p>
                 </div>
              </div>
              
              {/* Paypal Card */}
              <div className="bg-[#f0f8fa] rounded-[25px] md:rounded-[30px] p-8 md:p-10 text-left relative overflow-hidden group hover:shadow-lg transition-all">
                 <div className="flex items-center gap-3 mb-6 relative z-10">
                    <span className="text-[#0087aa] text-xl">🌐</span>
                    <h4 className="font-bold text-lg md:text-xl text-[#0c1818]">Paypal</h4>
                 </div>
                 <div className="space-y-4 text-gray-600 font-light text-sm relative z-10">
                    <p className="flex flex-col gap-1 border-b border-black/5 pb-2"><span>Link:</span> <span className="font-medium text-[#0087aa]">paypal.me/ttnmission</span></p>
                    <p className="flex flex-col gap-1"><span>Email:</span> <span className="font-medium text-[#0c1818]">info@ttnmission.org</span></p>
                 </div>
                 <div className="absolute bottom-[-20px] right-[-20px] w-24 h-24 bg-[#0087aa]/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                 <div className="absolute bottom-0 right-0 w-12 h-12 bg-[#0087aa] rounded-tl-full opacity-60"></div>
              </div>
           </div>
           
           <div className="text-center">
              <p className="font-bold text-[#0c1818] mb-4">Need assistance with your donation?</p>
              <a href="#" className="text-[#0087aa] font-medium underline flex items-center justify-center gap-2">
                 Contact our donation support team:
              </a>
              <p className="mt-2 text-gray-600 font-light">Email: donation-support@ttn.org</p>
              <p className="text-gray-600 font-light">Phone: +257 222 22 101</p>
           </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
}
