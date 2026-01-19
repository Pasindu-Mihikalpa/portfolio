import React, { useState } from 'react';
import { Award, X, Loader } from 'lucide-react';
import { certificates } from '../data/certificates';

/**
 * CERTIFICATES PAGE - HOW TO MANAGE
 * 
 * ===== ADD A NEW CERTIFICATE =====
 * 1. Go to: src/data/certificates.js
 * 2. Add a new object to the certificates array with:
 *    {
 *      id: [next_number],
 *      title: "Certificate Title",
 *      issuer: "SLASSCOM Academy",
 *      date: "2023",
 *      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/[icon]/[icon]-original.svg",
 *      certificateUrl: "path/to/certificate/image",
 *    }
 * 3. The certificate will automatically appear in the scrolling marquee
 * 
 * ===== EDIT AN EXISTING CERTIFICATE =====
 * 1. Go to: src/data/certificates.js
 * 2. Find the certificate object you want to edit
 * 3. Update the fields:
 *    - title: Change certificate name
 *    - issuer: Change issuing organization
 *    - date: Update the year
 *    - logo: Update the icon URL
 *    - certificateUrl: Update the certificate image/PDF URL
 * 4. Changes apply instantly to the marquee
 * 
 * ===== NOTES =====
 * - Logo URLs: Use devicon icons from https://devicon.dev
 * - Certificate URLs: Can be image (jpg, png) or PDF
 * - ID must be unique for each certificate
 * - Certificates display with a loading animation when clicked (1.5s delay)
 */

export default function Certificates() {
  const [viewingCertId, setViewingCertId] = useState(null);
  const [loadingCertId, setLoadingCertId] = useState(null);

  const handleCertificateClick = (cert) => {
    setLoadingCertId(cert.id);
    // Simulate loading delay
    setTimeout(() => {
      setViewingCertId(cert.id);
      setLoadingCertId(null);
    }, 1500);
  };

  return (
    <div className="py-24 bg-[#050A15]/50 overflow-hidden">
      
      {/* Header */}
      <div className="container px-6 mx-auto mb-16 text-center">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
          My <span className="text-cyan-400">Certificates</span>
        </h2>
        <p className="max-w-2xl mx-auto text-gray-400">
          Professional certifications and achievements that validate my skills and expertise.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden mask-edges">
        
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
                    className="w-full h-full object-contain filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-300"
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
            className="relative w-full max-w-4xl bg-gray-900 border border-cyan-400/30 rounded-2xl overflow-hidden shadow-2xl shadow-cyan-400/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setViewingCertId(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-red-500/20 hover:bg-red-500/40 rounded-full transition-colors"
              aria-label="Close"
            >
              <X className="text-white" size={24} />
            </button>

            {/* Certificate Image */}
            <div className="relative w-full h-[500px] bg-gray-800 overflow-auto">
              <img
                src={certificates.find(c => c.id === viewingCertId)?.certificateUrl}
                alt="Certificate"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Certificate Info Footer */}
            <div className="p-6 bg-gray-800 border-t border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {certificates.find(c => c.id === viewingCertId)?.title}
                  </h3>
                  <p className="text-cyan-400">
                    {certificates.find(c => c.id === viewingCertId)?.issuer}
                  </p>
                </div>
                
                <button
                  onClick={() => setViewingCertId(null)}
                  className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors"
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
