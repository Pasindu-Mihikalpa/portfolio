import React, { useState } from 'react';
import { Award, X, Loader, ExternalLink } from 'lucide-react';
import { certificates } from '../data/certificates';

export default function Certificates() {
  const [viewingCertId, setViewingCertId] = useState(null);
  const [loadingCertId, setLoadingCertId] = useState(null);

  const handleCertificateClick = (cert) => {
    setLoadingCertId(cert.id);
    setTimeout(() => {
      setViewingCertId(cert.id);
      setLoadingCertId(null);
    }, 1500);
  };

  return (
    <div className="relative py-24 bg-[#050A15]/50 overflow-hidden">
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 opacity-10 animate-float-slow"
          style={{ 
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 100px,
              rgba(6, 182, 212, 0.03) 100px,
              rgba(6, 182, 212, 0.03) 200px
            ),
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 100px,
              rgba(6, 182, 212, 0.03) 100px,
              rgba(6, 182, 212, 0.03) 200px
            )`,
          }}
        />
        <div 
          className="absolute inset-0 opacity-5 animate-float-slow"
          style={{ 
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)',
            animationDelay: '-5s'
          }}
        />
      </div>
      
      {/* Header */}
      <div className="container relative z-10 px-6 mx-auto mb-16 text-center">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
          My <span className="text-cyan-400">Certificates</span>
        </h2>
        <p className="max-w-2xl mx-auto text-gray-400">
          Professional certifications and achievements that validate my skills and expertise.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative z-10 w-full overflow-hidden mask-edges">
        
        {/* Scrolling Track */}
        <div className="flex items-center gap-16 py-8 animate-marquee">
          
          {[...certificates, ...certificates].map((cert, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center gap-4 transition-transform duration-300 cursor-pointer group hover:scale-110"
              title={`${cert.title} - Click to view`}
              onClick={() => handleCertificateClick(cert)}
            >
              {/* Logo Card */}
              <div className="relative flex items-center justify-center w-24 h-24 p-5 transition-all border border-gray-800 shadow-lg rounded-2xl bg-gray-900/50 group-hover:border-cyan-400/50 group-hover:shadow-cyan-400/20">
                {loadingCertId === cert.id ? (
                  <Loader className="animate-spin text-cyan-400" size={32} />
                ) : (
                  <img 
                    src={cert.logo} 
                    alt={cert.issuer} 
                    className="w-full h-full object-contain filter grayscale-20 group-hover:grayscale-0 transition-all duration-300"
                  />
                )}
              </div>
              
              {/* Certificate Title */}
              <span className="text-sm font-medium text-gray-500 transition-colors group-hover:text-cyan-400">
                {cert.title}
              </span>
            </div>
          ))}

        </div>
      </div>

      {/* Certificate Viewer Modal */}
      {viewingCertId && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setViewingCertId(null)}
        >
          <div 
            className="relative w-full max-w-4xl overflow-hidden bg-gray-900 border shadow-2xl border-cyan-400/30 rounded-2xl shadow-cyan-400/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setViewingCertId(null)}
              className="absolute z-10 p-2 transition-colors rounded-full top-4 right-4 bg-red-500/20 hover:bg-red-500/40"
              aria-label="Close"
            >
              <X className="text-white" size={24} />
            </button>

            {/* Certificate Preview */}
            {(() => {
              const cert = certificates.find(c => c.id === viewingCertId);
              return (
                <div className="relative w-full h-125 bg-gray-800 flex items-center justify-center">
                  <div className="text-center space-y-6">
                    <div className="flex justify-center">
                      <div className="p-6 bg-cyan-500/10 rounded-full">
                        <Award className="text-cyan-400" size={80} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{cert?.title}</h3>
                      <p className="text-gray-400">{cert?.issuer} • {cert?.date}</p>
                    </div>
                    <a
                      href={cert?.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-4 font-semibold text-white transition-all rounded-lg bg-cyan-500 hover:bg-cyan-600 hover:scale-105"
                    >
                      <ExternalLink size={20} />
                      View Certificate
                    </a>
                  </div>
                </div>
              );
            })()}

            {/* Certificate Info Footer */}
            <div className="p-6 bg-gray-800 border-t border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">
                    Click the button above to open the certificate in a new tab
                  </p>
                </div>
                
                <button
                  onClick={() => setViewingCertId(null)}
                  className="px-6 py-2 font-semibold text-white transition-colors rounded-lg bg-gray-700 hover:bg-gray-600"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
