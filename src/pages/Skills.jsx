import React from 'react';

// Skill Data: Names and Logo URLs
const skills = [
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Power BI", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
  { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
];

export default function Skills() {
  return (
    <div className="py-24 bg-[#050A15]/50 overflow-hidden">
      
      {/* Header */}
      <div className="container px-6 mx-auto mb-16 text-center">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
          My <span className="text-cyan-400">Tech Stack</span>
        </h2>
        <p className="max-w-2xl mx-auto text-gray-400">
          The technologies and tools I use to build data-driven solutions and web applications.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden mask-edges">
        
        {/* Scrolling Track */}
        <div className="flex items-center gap-16 py-8 animate-marquee">
          
          {/* We map the skills array TWICE ([...skills, ...skills]) 
            to create a seamless infinite loop.
          */}
          {[...skills, ...skills].map((skill, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center gap-4 transition-transform duration-300 cursor-pointer group hover:scale-110"
            >
              {/* Logo Card */}
              <div className="relative flex items-center justify-center w-24 h-24 p-5 transition-all border border-gray-800 shadow-lg rounded-2xl bg-gray-900/50 group-hover:border-cyan-400/50 group-hover:shadow-cyan-400/20">
                <img 
                  src={skill.logo} 
                  alt={skill.name} 
                  className="w-full h-full object-contain filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              
              {/* Skill Name */}
              <span className="text-sm font-medium text-gray-500 transition-colors group-hover:text-cyan-400">
                {skill.name}
              </span>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}