import React, { useEffect, useState } from 'react';
import { Linkedin, Github, X, Mail } from 'lucide-react';
import profileImage from '../assets/my_profile.png';

// Import Section Components
import Skills from './Skills';
import Certificates from './Certificates';
import About from './About';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';

const roleTitles = [
  'Data Analyst',
  'Business Analyst',
  'AI & Machine Learning Enthusiast',
  'Tech-Driven Leader',
];

export default function Home() {
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roleTitles[activeRoleIndex];
    const isRoleFullyTyped = typedRole === currentRole;
    const isRoleCleared = typedRole.length === 0;

    const typingSpeed = isDeleting ? 45 : 90;
    const pauseDelay = isRoleFullyTyped ? 1200 : 0;
    const timeoutDelay = pauseDelay || typingSpeed;

    const timeoutId = setTimeout(() => {
      if (!isDeleting && !isRoleFullyTyped) {
        setTypedRole(currentRole.slice(0, typedRole.length + 1));
        return;
      }

      if (!isDeleting && isRoleFullyTyped) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && !isRoleCleared) {
        setTypedRole(currentRole.slice(0, typedRole.length - 1));
        return;
      }

      setIsDeleting(false);
      setActiveRoleIndex((previousIndex) => (previousIndex + 1) % roleTitles.length);
    }, timeoutDelay);

    return () => clearTimeout(timeoutId);
  }, [activeRoleIndex, typedRole, isDeleting]);

  return (
    // Main Container
    <div className="relative w-full overflow-x-hidden">
      
      {/* --- GLOBAL BACKGROUND with Motion Effect --- */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        {/* Base gradient for depth */}
        <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-black to-black"></div>

        {/* Background image with subtle zoom/pan motion */}
        <div 
          className="absolute inset-0 animate-slow-zoom" 
          style={{ 
            backgroundImage: "url('/background_img.jpg')",
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>

        {/* Dim overlay to keep text readable while showing the image */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Cyan glow (top-right) */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(ellipse at 80% 15%, rgba(6, 182, 212, 0.12), transparent 65%)'
        }}></div>

        {/* Blue glow (bottom-left) */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(ellipse at 15% 85%, rgba(59, 130, 246, 0.08), transparent 70%)'
        }}></div>
      </div>
      
      {/* --- SECTION 1: HERO (Profile Header) --- */}
      <section id="home" className="relative min-h-[calc(100vh-80px)] flex items-center py-6">
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
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
                    Mihikalpa
                  </span>
                </h1>
              </div>
              
              {/* Dynamic Role with Typewriter Effect */} 
              <h2 className="text-xl font-medium text-gray-300 md:text-2xl min-h-[2.25rem]">
                <span className="inline-block text-cyan-200">
                  {typedRole}
                  <span className="ml-1 text-cyan-400 animate-pulse"></span>
                </span>
              </h2>
              
              <p className="max-w-xl text-base leading-relaxed text-gray-400">
                I am an aspiring Data Analyst and Developer with a passion for uncovering insights and building interactive solutions. Dedicated to mastering BI, AI, and Data Science to make complex data visually compelling.
              </p>
              
              {/* Social Media Links */}
              <div className="flex gap-4 pt-2">
                <a 
                  href="https://github.com/Pasindu-Mihikalpa" 
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
                  href="mailto:pasindumihikalpa@outlook.com" 
                  className="p-4 border-2 border-[#2f3b4b] text-white rounded-full hover:border-cyan-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex items-center justify-center md:justify-end group">
              <div className="relative p-3 bg-[#050A15]/60 border-2 border-[#1f2937] rounded-[40px] group-hover:border-cyan-400 transition-colors duration-500 backdrop-blur-sm max-h-[60vh] md:max-h-[85vh]">
                <img 
                  src={profileImage} 
                  alt="Pasindu Mihikalpa" 
                  className="w-auto h-auto max-h-[56vh] md:max-h-[80vh] object-contain rounded-[30px] filter grayscale-30 group-hover:grayscale-0 transform group-hover:scale-[1.02] transition-all duration-500 ease-out"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SEPARATOR --- */}
      <div className="h-px bg-linear-to-r from-transparent via-cyan-400 to-transparent"></div>

      {/* --- OTHER SECTIONS --- */}
      
      <section id="about">
        <About />
      </section>

      {/* --- SEPARATOR --- */}
      <div className="h-px bg-linear-to-r from-transparent via-cyan-400 to-transparent"></div>
      
      <section id="skills">
        <Skills />
      </section>

      {/* --- SEPARATOR --- */}
      <div className="h-px bg-linear-to-r from-transparent via-cyan-400 to-transparent"></div>

      <Certificates />

      {/* --- SEPARATOR --- */}
      <div className="h-px bg-linear-to-r from-transparent via-cyan-400 to-transparent"></div>

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
        <div className="h-px bg-linear-to-r from-transparent via-cyan-400 to-transparent"></div>
      </div>

      <section id="contact" className="pb-20">
        <Contact />
      </section>

    </div>
  );
}