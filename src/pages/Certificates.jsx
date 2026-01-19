/* ========================================================================
  📜 INSTRUCTIONS: HOW TO UPDATE CERTIFICATES
  ========================================================================
  To add, edit, or remove certificates, modify the certificatesData array
  in: src/data/certificates.js
  
  Each certificate supports:
  - PDF files: Set type to "pdf"
  - Image files: Set type to "image" for PNG/JPEG
  - Store certificate files in: public/certificates/
  
  See detailed instructions in src/data/certificates.js
  ========================================================================
*/

import React from 'react';
import { certificatesData } from '../data/certificates.js';
import CertificateCard from '../components/cards/CertificateCard';

export default function Certificates() {
  return (
    <div className="py-12 animate-fade-in-up">
      <div className="container max-w-6xl px-6 mx-auto">
        
        {/* Page Header */}
        <div className="relative mb-16 text-center">
          <h1 className="relative z-10 inline-block text-4xl font-bold text-white md:text-5xl">
            CERTIFICATES
            <span className="block w-full h-1 mt-2 rounded-full bg-cyan-400"></span>
          </h1>
          <span className="absolute z-0 text-6xl font-bold tracking-widest text-gray-800 -translate-x-1/2 -translate-y-1/2 select-none top-1/2 left-1/2 md:text-8xl opacity-20">
            CERTIFICATES
          </span>
        </div>

        {/* Certificates Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certificatesData.map((certificate) => (
            <CertificateCard 
              key={certificate.id} 
              certificate={certificate} 
            />
          ))}
        </div>

      </div>
    </div>
  );
}
