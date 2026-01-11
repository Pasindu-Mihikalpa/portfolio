import { useState } from 'react';
import { Briefcase, GraduationCap, ChevronDown, ChevronUp } from 'lucide-react';
import PropTypes from 'prop-types';

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
          <ResumeSection 
            title="Experience" 
            icon={<Briefcase size={24} />} 
            items={experienceData} 
          />

          {/* Right Column: Education */}
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

// --- Reusable Section Component ---
const ResumeSection = ({ title, icon, items }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Show only first 2 items unless expanded
  const visibleItems = isExpanded ? items : items.slice(0, 2);
  const hiddenCount = items.length - 2;

  return (
    <div>
      {/* Section Header */}
      <button 
        type="button"
        className="flex items-center justify-between w-full mb-8 cursor-pointer group"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-3">
          <span className="text-cyan-400">{icon}</span>
          <h2 className="text-2xl font-bold text-white transition-colors group-hover:text-cyan-400">{title}</h2>
        </div>
        <div className="transition-transform duration-300 text-cyan-400">
          {isExpanded ? <ChevronUp /> : <ChevronDown />}
        </div>
      </button>

      {/* Timeline List */}
      <div className="pb-4 ml-3 space-y-10 border-l-2 border-gray-800">
        {visibleItems.map((item, index) => (
          // Using index as key fallback since dates might duplicate
          <div key={`${item.title}-${index}`} className="relative pl-8">
            {/* Timeline Dot */}
            <span className="absolute -left-2.25 top-1 w-4 h-4 rounded-full border-2 border-cyan-400 bg-[#050A15]"></span>
            
            {/* Date */}
            <span className="block mb-1 text-sm text-gray-500">{item.date}</span>
            
            {/* Title & Badge */}
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3 className="text-xl font-bold text-cyan-400">{item.title}</h3>
              {item.badge && (
                <span className="bg-cyan-900/30 text-cyan-400 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  {item.badge}
                </span>
              )}
            </div>

            {/* Subtitle / Company */}
            <h4 className="mb-2 font-medium text-white">{item.subtitle}</h4>
            
            {/* Description */}
            <div className="text-sm leading-relaxed text-gray-400 whitespace-pre-line">
              {item.description}
            </div>
          </div>
        ))}
      </div>

      {/* "Show More" Link at the bottom */}
      {!isExpanded && hiddenCount > 0 && (
        <button 
          onClick={() => setIsExpanded(true)}
          className="flex items-center gap-1 text-sm font-bold transition-colors ml-11 text-cyan-400 hover:text-white"
        >
          + {hiddenCount} more items
        </button>
      )}
    </div>
  );
};

ResumeSection.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      // Description can now be a String OR a React Element (JSX)
      description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
      badge: PropTypes.string,
    })
  ).isRequired,
};

// --- DATA ---
const experienceData = [
  {
    date: "2024",
    title: "Project Chairperson – Akurata Rukulak 2024",
    subtitle: "Department of Information and Communication Technology, Uva Wellassa University of Sri Lanka",
    badge: "Volunteering",
    description: (
      <>
        • Organized by the Department of Information and Communication Technology, Faculty of Technological Studies, Uva Wellassa University of Sri Lanka.
        <br /><br />
        • Akurata Rukulak is an annual CSR project by ICT undergraduates of Uva Wellassa University, supporting underprivileged schools in Badulla.
      </>
    )
  },
  {
    date: "2024 – Present",
    title: "Member, Board of Directors",
    subtitle: "Leo Club of Uva Wellassa University",
    badge: "Volunteering",
    description: (
      <>
        • <strong>Editorial Crew Member (Leostic Year 2024/2025)</strong>
        <br />
        Content Writing for Newsletter and support in maintaining LEO TIMES newsletter.
        <br /><br />
        • <strong>Joint Secretary (Leostic Year 2025/2026)</strong>
        <br />
        Manages records, correspondence, and meeting minutes, ensuring smooth communication and organized administration within the organization.
        <br /><br />
        • <strong>Project Chairperson – ‘Project Melodic Mind’</strong>
        <br />
        A collaborative mental well-being project by the Leo Club of Uva Wellassa University and the Leo Club of S. Thomas’ College, Bandarawela, addressing academic stress through counselling and music therapy.
      </>
    )
  },
  {
    date: "2024 – Present",
    title: "Member",
    subtitle: "IEEE Uva Wellassa University Student Branch",
    badge: "Volunteering",
    description: (
      <>
        • <strong>Organizing Committee Member - Volunteer Training Session</strong>
        <br />
        A leadership development initiative focused on preparing volunteers for effective community service through skill-building and teamwork.
        <br /><br />
        • <strong>Executive Committee Member - Project: ByteBash, Version 2</strong>
        <br />
        A monthly tech-talk series that brings together students to share knowledge, discuss emerging technologies, and strengthen practical skills through interactive sessions.
      </>
    )
  }
];

const educationData = [
  {
    date: "2022 - Present",
    title: "Bachelor of Information and Communication Technology",
    subtitle: "Uva Wellassa University",
    description: "Reading for a degree in Computer Science and Technology."
  },
  {
    date: "Completed 2021",
    title: "NVQ Level 5 – Software Development",
    subtitle: "National Vocational Training Institute- Abegoda",
    description: "National Diploma bridging software engineering and creative design. focused on building scalable web applications, database administration, and quality assurance standards."
  },
  {
    date: "2020",
    title: "G.C.E Advanced Level",
    subtitle: "S. Thomas' College Bandarawela",
    description: "Technology Stream."
  },
  {
    date: "2017",
    title: "G.C.E Ordinary Level",
    subtitle: "S. Thomas' College Bandarawela",
    description: "Passed with A - 3 , B - 6."
  }
];