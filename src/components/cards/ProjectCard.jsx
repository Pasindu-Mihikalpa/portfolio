import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative h-[300px] rounded-2xl overflow-hidden cursor-pointer shadow-lg shadow-black/50 border border-[#222]">
      
      {/* Background Image */}
      <img 
        src={project.image} 
        alt={project.title} 
        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" 
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center transition-opacity duration-300 opacity-0 bg-cyan-900/90 group-hover:opacity-100">
        
        {/* Icon Slides Down */}
        <div className="transition-transform duration-300 transform -translate-y-4 group-hover:translate-y-0">
          {project.mainIcon}
        </div>

        {/* Title Slides Up */}
        <h3 className="mb-1 text-2xl font-bold text-white transition-transform duration-300 delay-75 transform translate-y-4 group-hover:translate-y-0">
          {project.title}
        </h3>
        
        {/* Category Slides Up */}
        <span className="text-sm font-medium transition-transform duration-300 delay-100 transform translate-y-4 text-cyan-100 group-hover:translate-y-0">
          {project.category}
        </span>

        {/* Links Slide Up */}
        <div className="flex gap-4 mt-6 transition-all duration-300 delay-150 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
          {project.links.length > 0 ? (
            project.links.map((link, index) => (
              <a 
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 text-gray-900 transition-all bg-white rounded-full shadow-lg hover:bg-black hover:text-cyan-400 hover:scale-110"
              >
                {link.icon}
              </a>
            ))
          ) : (
            <span className="px-3 py-1 text-xs border rounded-full bg-black/30 text-cyan-100 border-cyan-500/30">
              Preview Only
            </span>
          )}
        </div>

      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    mainIcon: PropTypes.node.isRequired,
    image: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.node,
        url: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

export default ProjectCard;