import { Github, ExternalLink, Linkedin } from 'lucide-react';

const ProjectCard = ({ project }) => {
  // Helper to get the right icon based on link type
  const getIcon = (type) => {
    switch (type) {
      case 'github': return <Github size={20} />;
      case 'external': return <ExternalLink size={20} />;
      case 'linkedin': return <Linkedin size={20} />;
      default: return <ExternalLink size={20} />;
    }
  };

  return (
    <div className="group relative rounded-2xl overflow-hidden bg-dark-card border border-[#222] hover:border-cyan-400 transition-all duration-300 h-87">
      
      {/* 1. Project Image */}
      <img 
        src={project.image} 
        alt={project.title} 
        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" 
      />

      {/* 2. Dark Overlay (Always visible on mobile, hover on desktop) */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black via-black/80 to-transparent group-hover:opacity-100">
        
        {/* Project Info */}
        <div className="transition-transform duration-300 transform translate-y-4 group-hover:translate-y-0">
          <span className="block mb-2 text-xs font-bold tracking-wider uppercase text-cyan-400">
            {project.category}
          </span>
          <h3 className="mb-4 text-2xl font-bold text-white">
            {project.title}
          </h3>

          {/* Links Section */}
          <div className="flex gap-4 mt-2">
            {project.links.length > 0 ? (
              project.links.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-white transition-colors rounded-full bg-white/10 hover:bg-cyan-500 hover:text-white backdrop-blur-sm"
                  title={link.type}
                >
                  {getIcon(link.type)}
                </a>
              ))
            ) : (
              // Fallback if no links exist
              <span className="inline-block px-4 py-2 text-sm font-bold text-gray-400 bg-gray-800 border border-gray-700 rounded-full">
                Coming Soon
              </span>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;