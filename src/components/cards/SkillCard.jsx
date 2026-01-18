import React from 'react';
import PropTypes from 'prop-types';

const SkillCard = ({ skill }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 transition-transform duration-300 cursor-pointer group hover:scale-110">
      {/* Logo Card */}
      <div className="relative flex items-center justify-center w-24 h-24 p-5 transition-all border border-gray-800 shadow-lg rounded-2xl bg-gray-900/50 group-hover:border-cyan-400/50 group-hover:shadow-cyan-400/20">
        <img 
          src={skill.logo} 
          alt={skill.name} 
          className="object-contain w-full h-full filter brightness-90 group-hover:brightness-110"
        />
      </div>
      
      {/* Skill Name */}
      <span className="text-sm font-medium text-gray-400 transition-colors group-hover:text-cyan-400">
        {skill.name}
      </span>
    </div>
  );
};

SkillCard.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
  }).isRequired,
};

export default SkillCard;
