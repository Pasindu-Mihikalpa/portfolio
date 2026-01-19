import React from 'react';
import { Linkedin, Github, X, Mail } from 'lucide-react';
import profileImage from '../assets/my_profile.png';

// Import Section Components
import Skills from './Skills'; 
import About from './About';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';

export default function Home() {
  return (
    // Main Container
    <div className="relative w-full overflow-hidden">
      
      {/* --- GLOBAL BACKGROUND (kept behind all content) --- */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 bg-center bg-no-repeat bg-cover animate-float" 
          style={{ backgroundImage: "url('/background_img.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-black/70"></div>
      </div>


      {/* --- SECTION 1: HERO (Profile Header) --- */}
      <section id="home" className="min-h-[calc(100vh-80px)] flex items-center py-12">
        <div className="container relative z-10 px-6 mx-auto">
          <div className="grid items-center gap-12 md:grid-cols-2">
            
            {/* Text Content */}
            <div className="space-y-8 animate-fade-in-up">
              <div>
                <h3 className="mb-2 text-2xl font-medium md:text-3xl text-cyan-400">
                  Hello, I'm
                </h3>
                <h1 className="text-5xl font-black leading-tight tracking-wide text-white md:text-7xl">
                  Pasindu <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    Mihikalpa
                  </span>
                </h1>
              </div>
              
              <h2 className="text-xl font-medium text-gray-300 md:text-2xl">
                Data Analyst | Business Analyst | AI & Machine Learning Enthusiast | Tech-Driven Leader
              </h2>
              
              <p className="max-w-xl text-lg leading-relaxed text-gray-400">
                I am an aspiring Data Analyst and Developer with a passion for uncovering insights and building interactive solutions. Dedicated to mastering BI, AI, and Data Science to make complex data visually compelling.
              </p>
              
              {/* Social Media Links */}
              <div className="flex gap-4 pt-4">
                <a 
                  href="https://www.linkedin.com/in/pasindu-mihikalpa/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border-2 border-[#2f3b4b] text-white rounded-full hover:border-cyan-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="https://github.com/Pasindu-Mihikalpa" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border-2 border-[#2f3b4b] text-white rounded-full hover:border-cyan-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://x.com/PMihikalpa" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border-2 border-[#2f3b4b] text-white rounded-full hover:border-cyan-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300"
                  aria-label="Twitter"
                >
                  <X size={24} />
                </a>
                <a 
                  href="mailto:pmihikalpa2022@gmail.com" 
                  className="p-4 border-2 border-[#2f3b4b] text-white rounded-full hover:border-cyan-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative z-10 flex justify-center group">
              <div className="relative z-10 p-3 bg-[#050A15]/60 border-2 border-[#1f2937] rounded-[40px] group-hover:border-cyan-400 transition-colors duration-500 backdrop-blur-sm">
                <img 
                  src={profileImage} 
                  alt="Pasindu Mihikalpa" 
                  className="w-full max-w-[480px] h-auto object-cover rounded-[30px] filter grayscale-[30%] group-hover:grayscale-0 transform group-hover:scale-[1.02] transition-all duration-500 ease-out"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SEPARATOR --- */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

      {/* --- OTHER SECTIONS --- */}
      
      <section id="about">
        <About />
      </section>

      {/* --- SEPARATOR --- */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
      
      <section id="skills">
        <Skills />
      </section>

      {/* --- SEPARATOR --- */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

      <section id="resume">
        <Resume />
      </section>

      {/* --- SEPARATOR --- */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

      <section id="projects">
        <Projects />
      </section>

      {/* --- SEPARATOR --- */}
      <div className="py-12">
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
      </div>

      <section id="contact" className="pb-20">
        <Contact />
      </section>

    </div>
  );
}