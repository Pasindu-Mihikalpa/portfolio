import React, { useLayoutEffect, useRef, useState } from 'react';
import {
  Award,
  X,
  ExternalLink,
  Users,
  Monitor,
  Presentation,
  CalendarCheck,
  Zap,
  Network,
  Handshake,
  Palette,
  Code2,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { certificates } from '../data/certificates';

gsap.registerPlugin(ScrollTrigger);

export default function Certificates() {
  const [viewingCertId, setViewingCertId] = useState(null);
  const [hoveredCertId, setHoveredCertId] = useState(null);
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const getCertificateIcon = (title) => {
    const normalizedTitle = title.toLowerCase();

    if (normalizedTitle.includes('collaboration') || normalizedTitle.includes('team')) return Users;
    if (normalizedTitle.includes('presence') || normalizedTitle.includes('virtual')) return Monitor;
    if (normalizedTitle.includes('presentation')) return Presentation;
    if (normalizedTitle.includes('meeting')) return CalendarCheck;
    if (normalizedTitle.includes('agility')) return Zap;
    if (normalizedTitle.includes('trust')) return Handshake;
    if (normalizedTitle.includes('web design') || normalizedTitle.includes('design')) return Palette;
    if (normalizedTitle.includes('python')) return Code2;
    return Network;
  };

  useLayoutEffect(() => {
    const sectionElement = sectionRef.current;
    const cardElements = cardsRef.current.filter(Boolean);

    if (!sectionElement || cardElements.length === 0) return;

    const getCardWidth = () => {
      const width = window.innerWidth;
      if (width >= 1024) return 244;
      if (width >= 768) return 232;
      return 220;
    };

    const getSpread = () => {
      const sidePadding = 8;
      const containerWidth = sectionElement.clientWidth;
      const cardWidth = getCardWidth();
      const maxEdgeDistance = Math.max(0, containerWidth / 2 - cardWidth / 2 - sidePadding);
      const halfCount = (cardElements.length - 1) / 2;

      if (halfCount <= 0) return 0;
      return maxEdgeDistance / halfCount;
    };

    const initialRotations = [-10, -7, -4, -1, 2, 5, 8, -6, 4, 9];

    const context = gsap.context(() => {
      gsap.set(cardElements, {
        left: '50%',
        top: '50%',
        xPercent: -50,
        yPercent: -50,
        x: 0,
        y: 0,
        zIndex: (index) => cardElements.length - index,
        rotation: (index) => initialRotations[index] ?? 0,
        transformOrigin: '50% 50%',
        willChange: 'transform',
      });

      gsap.to(cardElements, {
        x: (index) => (index - (cardElements.length - 1) / 2) * getSpread(),
        y: (index) => (index % 2 === 0 ? -10 : 10),
        rotation: 0,
        stagger: 0.09,
        duration: 1.05,
        ease: 'expo.out',
        overwrite: 'auto',
        scrollTrigger: {
          trigger: sectionElement,
          start: 'top 76%',
          once: true,
        },
      });
    }, sectionElement);

    return () => context.revert();
  }, []);

  return (
    <section
      id="certificates"
      ref={sectionRef}
      className="relative w-full px-6 py-24 lg:px-20"
    >

      <div className="relative z-10 mb-14 text-center">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
          Professional <span className="text-cyan-400">Certificates</span>
        </h2>
        <p className="max-w-3xl mx-auto text-gray-400">
          A practical, structured showcase of certificates that represent learning, execution, and consistency.
        </p>
      </div>

      <div className="relative z-10 h-[360px] w-full overflow-visible">
        {certificates.map((cert, index) => {
          const Icon = getCertificateIcon(cert.title);
          const isHovered = hoveredCertId === cert.id;

          return (
          <button
            key={cert.id}
            ref={(element) => {
              cardsRef.current[index] = element;
            }}
            type="button"
            title={cert.title + ' - Click to view'}
            onClick={() => setViewingCertId(cert.id)}
            onMouseEnter={() => setHoveredCertId(cert.id)}
            onMouseLeave={() => setHoveredCertId(null)}
            style={{
              zIndex: isHovered ? certificates.length + 20 : certificates.length - index,
            }}
            className={`group absolute w-[220px] overflow-hidden rounded-2xl border bg-[#0B1220]/70 p-5 text-left backdrop-blur-sm transition-all duration-300 md:w-[232px] lg:w-[244px] ${
              isHovered
                ? 'scale-105 -translate-y-4 border-cyan-300/60 shadow-[0_22px_38px_rgba(6,182,212,0.24)]'
                : 'border-white/10 shadow-[0_16px_28px_rgba(0,0,0,0.28)]'
            }`}
          >
            <p className="text-xs font-semibold tracking-[0.18em] text-cyan-300/90">
              {String(index + 1).padStart(2, '0')}
            </p>

            <h3 className="mt-2 text-[1.65rem] font-black leading-tight tracking-tight text-white">
              {cert.title}
            </h3>

            <p className="mt-3 text-sm font-medium text-slate-300">{cert.issuer}</p>
            <p className="text-sm text-slate-400">{cert.date}</p>

            <div className="flex items-center justify-between h-16 px-4 mt-5 border rounded-xl border-white/12 bg-black/30">
              <span className="text-xs font-semibold tracking-wider text-cyan-200/90">CLICK TO VIEW</span>
              <div className="flex items-center justify-center w-10 h-10 transition-transform duration-300 rounded-full bg-cyan-400/10 group-hover:scale-110">
                <Icon className="text-cyan-300" size={20} />
              </div>
            </div>
          </button>
          );
        })}
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
                <div className="relative flex items-center justify-center w-full bg-gray-800 h-[32rem]">
                  <div className="space-y-6 text-center">
                    <div className="flex justify-center">
                      <div className="p-6 rounded-full bg-cyan-500/10">
                        <Award className="text-cyan-400" size={80} />
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-2 text-2xl font-bold text-white">{cert?.title}</h3>
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
                  className="px-6 py-2 font-semibold text-white transition-colors bg-gray-700 rounded-lg hover:bg-gray-600"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
