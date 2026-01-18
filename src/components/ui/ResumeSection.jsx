import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ResumeSection = ({ title, icon, items }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Show only first 1 item unless expanded
  const visibleItems = isExpanded ? items : items.slice(0, 1);
  const hiddenCount = items.length - 1;

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
      description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
      badge: PropTypes.string,
    })
  ).isRequired,
};

export default ResumeSection;