/* ========================================================================
  📝 INSTRUCTIONS: HOW TO UPDATE RESUME DATA
  ========================================================================
  1. EDITING:
     - Modify the strings inside 'experienceData' or 'educationData'.
     - You can use HTML tags like <strong> for bold text.
     - Use backticks (`) for the description to support multiple lines.

  2. ADDING NEW ITEMS:
     - Copy the template below.
     - Paste it at the TOP of the array (to show newest first).

  3. REMOVING ITEMS:
     - Simply delete the entire object { ... }, from the array.

  --- 📋 COPY THIS TEMPLATE ---
  {
    date: "2026 - Present",
    title: "Job Title or Degree",
    subtitle: "Company or University Name",
    badge: "Full Time", // Optional: "Volunteering", "Internship", etc.
    description: `
      • <strong>Key Achievement:</strong> Description of what you did.
      <br />
      • Another point using <br /> for line breaks.
    `
  },
  ========================================================================
*/



import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
// Correct imports based on your structure
import { experienceData, educationData } from '../data/resume.jsx';
import ResumeSection from '../components/ui/ResumeSection';

export default function Resume() {
  return (
    <div className="py-12 animate-fade-in-up">
      <div className="container max-w-6xl px-6 mx-auto">
        
        {/* Page Header */}
        <div className="relative mb-16 text-center">
          <h1 className="relative z-10 inline-block text-4xl font-bold text-white md:text-5xl">
            RESUME
            <span className="block w-full h-1 mt-2 rounded-full bg-cyan-400"></span>
          </h1>
          <span className="absolute z-0 text-6xl font-bold tracking-widest text-gray-800 -translate-x-1/2 -translate-y-1/2 select-none top-1/2 left-1/2 md:text-8xl opacity-20">
            RESUME
          </span>
        </div>

        {/* Resume Content Grid */}
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left Column: Experience */}
          {/* Update items in src/data/resume.jsx under experienceData */}
          <ResumeSection 
            title="Experience" 
            icon={<Briefcase size={24} />} 
            items={experienceData} 
          />

          {/* Right Column: Education */}
          {/* Update items in src/data/resume.jsx under educationData */}
          <ResumeSection 
            title="Education" 
            icon={<GraduationCap size={24} />} 
            items={educationData} 
          />
        </div>

      </div>
    </div>
  );
}