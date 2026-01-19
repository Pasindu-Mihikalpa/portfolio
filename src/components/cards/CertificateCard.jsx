import React from 'react';
import PropTypes from 'prop-types';
import { FileText, Image as ImageIcon, ExternalLink } from 'lucide-react';

const CertificateCard = ({ certificate }) => {
  return (
    <div className="flex flex-col overflow-hidden transition-all duration-300 border shadow-lg group bg-gray-900/50 border-gray-800 rounded-2xl hover:border-cyan-400/50 hover:shadow-cyan-400/20 hover:scale-105">
      
      {/* Certificate Preview Image */}
      <div className="relative overflow-hidden h-52">
        <img 
          src={certificate.image} 
          alt={certificate.title} 
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Type Badge (PDF or Image) */}
        <div className="absolute flex items-center gap-2 px-3 py-1 text-xs font-medium bg-black/70 backdrop-blur-sm top-3 right-3 rounded-full text-cyan-400">
          {certificate.type === 'pdf' ? (
            <>
              <FileText size={14} />
              <span>PDF</span>
            </>
          ) : (
            <>
              <ImageIcon size={14} />
              <span>IMAGE</span>
            </>
          )}
        </div>
      </div>

      {/* Certificate Details */}
      <div className="flex flex-col flex-1 p-6 space-y-4">
        
        {/* Title */}
        <h3 className="text-xl font-bold text-white transition-colors group-hover:text-cyan-400">
          {certificate.title}
        </h3>
        
        {/* Issuer and Date */}
        <div className="space-y-1">
          <p className="font-medium text-gray-300">
            {certificate.issuer}
          </p>
          <p className="text-sm text-gray-500">
            {certificate.date}
          </p>
        </div>
        
        {/* Description */}
        <p className="flex-1 text-sm leading-relaxed text-gray-400">
          {certificate.description}
        </p>
        
        {/* View Certificate Button */}
        <a
          href={certificate.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 py-2 font-medium transition-all duration-300 border rounded-lg text-cyan-400 border-cyan-400/50 hover:bg-cyan-400 hover:text-gray-900 group/btn"
        >
          <span>View Certificate</span>
          <ExternalLink 
            size={16} 
            className="transition-transform duration-300 group-hover/btn:translate-x-1"
          />
        </a>
      </div>
    </div>
  );
};

CertificateCard.propTypes = {
  certificate: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    issuer: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    credentialUrl: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['pdf', 'image']).isRequired,
  }).isRequired,
};

export default CertificateCard;
