import React, { useState } from 'react';
import ProjectCard from '../components/cards/ProjectCard';
import CardLayout from '../components/layout/CardLayout';
import { projectsData } from '../data/projects';

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(3);
  const visibleProjects = projectsData.slice(0, visibleCount);
  const hasMore = visibleCount < projectsData.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <div className="py-12 mb-12 animate-fade-in-up">
      <div className="container max-w-6xl px-6 mx-auto">
        
        {/* Header */}
        <div className="relative mb-16 text-center">
          <h1 className="relative z-10 inline-block text-4xl font-bold text-white uppercase md:text-5xl">
            MY PROJECTS
            <span className="block w-full h-1 mt-2 rounded-full bg-cyan-400"></span>
          </h1>
          <span className="absolute z-0 text-6xl font-bold tracking-widest text-gray-800 -translate-x-1/2 -translate-y-1/2 select-none top-1/2 left-1/2 md:text-8xl opacity-20 whitespace-nowrap">
            PROJECTS
          </span>
        </div>

        {/* Grid Layout containing Cards */}
        <CardLayout>
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </CardLayout>

        {/* Load More Button */}
        {hasMore && (
          <div className="text-center">
            <button 
              onClick={handleLoadMore}
              className="px-8 py-3 font-bold text-white transition-all rounded-full shadow-lg bg-cyan-500 hover:bg-cyan-600 shadow-cyan-500/20 active:scale-95"
            >
              Load More
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
