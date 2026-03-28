import React, { useMemo, useState } from 'react';
import { X } from 'lucide-react';
import ProjectCard from '../components/cards/ProjectCard';
import CardLayout from '../components/layout/CardLayout';
import { projectsData } from '../data/projects';

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [selectedProject, setSelectedProject] = useState(null);

  const visibleProjects = projectsData.slice(0, visibleCount);
  const hasMore = visibleCount < projectsData.length;
  const selectedTechStack = useMemo(() => {
    if (!selectedProject) return [];
    return selectedProject.techStack || selectedProject.technologies || [];
  }, [selectedProject]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const openProjectDetails = (project) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  return (
    <>
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
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={openProjectDetails}
            />
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

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={closeProjectDetails}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto border shadow-2xl bg-[#081323] border-cyan-500/30 rounded-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={closeProjectDetails}
              aria-label="Close project snapshot"
              className="absolute z-10 p-2 transition-colors rounded-full top-4 right-4 bg-black/40 hover:bg-black/70"
            >
              <X className="text-white" size={22} />
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="object-cover w-full h-52"
            />

            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="text-cyan-300">{selectedProject.mainIcon}</div>
                <h2 className="text-2xl font-bold text-white md:text-3xl">{selectedProject.title}</h2>
              </div>

              <p className="mb-4 text-sm font-medium text-cyan-200">{selectedProject.category}</p>

              {selectedProject.description && (
                <p className="mb-6 leading-relaxed text-gray-200">{selectedProject.description}</p>
              )}

              {(selectedProject.role || selectedProject.status || selectedProject.duration || selectedProject.author) && (
                <div className="grid gap-3 p-4 mb-6 border sm:grid-cols-2 bg-slate-900/50 border-cyan-500/20 rounded-xl">
                  {selectedProject.role && <p className="text-sm text-gray-200"><span className="font-semibold text-cyan-300">Role:</span> {selectedProject.role}</p>}
                  {selectedProject.author && <p className="text-sm text-gray-200"><span className="font-semibold text-cyan-300">Author:</span> {selectedProject.author}</p>}
                  {selectedProject.status && <p className="text-sm text-gray-200"><span className="font-semibold text-cyan-300">Status:</span> {selectedProject.status}</p>}
                  {selectedProject.duration && <p className="text-sm text-gray-200"><span className="font-semibold text-cyan-300">Duration:</span> {selectedProject.duration}</p>}
                </div>
              )}

              {selectedProject.features && selectedProject.features.length > 0 && (
                <div className="mb-6">
                  <h3 className="mb-3 text-lg font-semibold text-white">Key Features</h3>
                  <ul className="grid gap-2 text-sm text-gray-200 md:grid-cols-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="p-2 border rounded-lg bg-slate-900/40 border-cyan-500/20">{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedProject.impact && selectedProject.impact.length > 0 && (
                <div className="mb-6">
                  <h3 className="mb-3 text-lg font-semibold text-white">Project Impact</h3>
                  <ul className="space-y-2 text-sm text-gray-200 list-disc list-inside">
                    {selectedProject.impact.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedProject.roadmap && selectedProject.roadmap.length > 0 && (
                <div className="mb-6">
                  <h3 className="mb-3 text-lg font-semibold text-white">Roadmap</h3>
                  <ul className="space-y-2 text-sm text-gray-200 list-disc list-inside">
                    {selectedProject.roadmap.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedProject.stats && (
                <div className="grid gap-3 mb-6 sm:grid-cols-3">
                  {Object.entries(selectedProject.stats).map(([key, value]) => (
                    <div key={key} className="p-3 text-center border bg-slate-900/50 border-cyan-500/20 rounded-xl">
                      <p className="mb-1 text-xs uppercase text-cyan-300/80">{key}</p>
                      <p className="text-lg font-bold text-white">{value}</p>
                    </div>
                  ))}
                </div>
              )}

              {selectedTechStack.length > 0 && (
                <div className="mb-6">
                  <h3 className="mb-3 text-lg font-semibold text-white">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedTechStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm font-medium border rounded-full text-cyan-100 bg-cyan-900/40 border-cyan-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {selectedProject.files && selectedProject.files.length > 0 && (
                <div className="mb-6">
                  <h3 className="mb-3 text-lg font-semibold text-white">Resources</h3>
                  <div className="space-y-3">
                    {selectedProject.files.map((fileItem, index) => (
                      <a
                        key={index}
                        href={fileItem.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-3 transition-colors border rounded-lg bg-slate-900/50 border-cyan-500/20 hover:border-cyan-400/60"
                      >
                        <p className="font-semibold text-white">{fileItem.name}</p>
                        <p className="text-sm text-gray-300">{fileItem.type} • {fileItem.size}</p>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {selectedProject.links && selectedProject.links.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {selectedProject.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white transition-colors rounded-lg bg-cyan-600 hover:bg-cyan-500"
                    >
                      {link.icon}
                      {link.label || `Open Link ${index + 1}`}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}