import React from 'react';
import AboutSection from '../components/ui/AboutSection';
import { aboutData } from '../data/about';
import profileImage from '../assets/my_profile_2.png';
import cvFile from '../assets/CV_Pasindu-Mihikalpa.pdf';

export default function About() {
  return (
    <div className="py-12 animate-fade-in-up">
      <div className="container px-6 mx-auto">
        
        {/* Section Header with "Background Text" Effect */}
        <div className="relative mb-16 text-center">
          <h1 className="relative z-10 inline-block text-4xl font-bold text-white md:text-5xl">
            ABOUT ME
            <span className="block w-full h-1 mt-2 rounded-full bg-cyan-400"></span>
          </h1>
          <span className="absolute z-0 text-6xl font-bold text-gray-800 -translate-x-1/2 -translate-y-1/2 select-none top-1/2 left-1/2 md:text-8xl opacity-20 whitespace-nowrap">
            ABOUT ME
          </span>
        </div>

        <AboutSection data={aboutData} profileImage={profileImage} cvFile={cvFile} />
      </div>
    </div>
  );
}
