import { useState } from 'react';
import { 
  Github, 
  ExternalLink, 
  Utensils, 
  ShoppingBag, 
  Layout, 
  BarChart2, 
  Smartphone, 
  Home 
} from 'lucide-react';
import PropTypes from 'prop-types';

/* =========================================
   1. INTERNAL COMPONENTS & DATA
   ========================================= */

// --- Project Data ---
const allProjects = [
  {
    id: 1,
    title: "UniEats",
    category: "MERN Stack Web App",
    mainIcon: <Utensils size={40} className="mb-4 text-cyan-400" />, 
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=480&auto=format&fit=crop",
    links: [
      { icon: <Github size={20} />, url: "https://github.com" },
      { icon: <ExternalLink size={20} />, url: "https://linkedin.com" }
    ]
  },
  {
    id: 2,
    title: "E-Commerce Dashboard",
    category: "React & Tailwind",
    mainIcon: <ShoppingBag size={40} className="mb-4 text-cyan-400" />,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop",
    links: [
      { icon: <Github size={20} />, url: "#" }
    ]
  },
  {
    id: 3,
    title: "Portfolio Website",
    category: "Web Development",
    mainIcon: <Layout size={40} className="mb-4 text-cyan-400" />,
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=400&auto=format&fit=crop",
    links: [
      { icon: <Github size={20} />, url: "#" }
    ]
  },
  {
    id: 4,
    title: "Data Visualization",
    category: "Python & Pandas",
    mainIcon: <BarChart2 size={40} className="mb-4 text-cyan-400" />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop",
    links: [
      { icon: <ExternalLink size={20} />, url: "#" }
    ]
  },
  {
    id: 5,
    title: "Mobile Banking App",
    category: "UI/UX Design",
    mainIcon: <Smartphone size={40} className="mb-4 text-cyan-400" />,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=400&auto=format&fit=crop",
    links: [] 
  },
  {
    id: 6,
    title: "Smart Home System",
    category: "IoT Project",
    mainIcon: <Home size={40} className="mb-4 text-cyan-400" />,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=400&auto=format&fit=crop",
    links: [
      { icon: <Github size={20} />, url: "#" },
      { icon: <ExternalLink size={20} />, url: "#" }
    ]
  },
];

// --- Internal Card Component ---
const ProjectCard = ({ project }) => (
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

/* =========================================
   2. MAIN PAGE COMPONENT
   ========================================= */

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(3);
  const visibleProjects = allProjects.slice(0, visibleCount);
  const hasMore = visibleCount < allProjects.length;

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

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

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