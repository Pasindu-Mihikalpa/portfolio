import React from 'react';
import PropTypes from 'prop-types';
import { Download } from 'lucide-react';
import Button from '../ui/Button';

const AboutSection = ({ data, profileImage, cvFile }) => {
  return (
    <div className="grid items-center gap-12 md:grid-cols-12">
      {/* Left Column: Image */}
      <div className="flex justify-center md:col-span-5">
        <div className="relative">
          {/* Image Frame/Border Effect */}
          <div className="border-4 border-[#1f2937] p-1 bg-dark shadow-2xl rounded-sm">
            <img 
              src={profileImage}
              alt="Pasindu Mihikalpa" 
              className="object-cover w-full h-auto transition-all duration-500 max-w-100 filter grayscale hover:grayscale-0"
            />
          </div>
        </div>
      </div>

      {/* Right Column: Content */}
      <div className="space-y-6 md:col-span-7">
        <div>
          <h2 className="mb-2 text-3xl font-bold text-white">
            {data.title}
          </h2>
          <p className="text-lg font-medium text-cyan-400">
            {data.subtitle}
          </p>
        </div>

        <p className="leading-relaxed text-gray-400">
          "{data.description}"
        </p>

        {/* Personal Info Grid */}
        <div className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-2">
          {data.personalInfo.map((info, index) => (
            <InfoItem key={index} label={info.label} value={info.value} />
          ))}
        </div>

        {/* Download CV Button */}
        <div className="pt-6">
          <Button variant="outline" href={cvFile}>
            Download CV <Download size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

// Helper Component for the Info List
const InfoItem = ({ label, value }) => (
  <div className="flex items-center gap-2">
    <span className="w-24 font-semibold text-white">{label}</span>
    <span className="text-white">:</span>
    <span className="text-gray-400">{value}</span>
  </div>
);

AboutSection.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    personalInfo: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  profileImage: PropTypes.string.isRequired,
  cvFile: PropTypes.string.isRequired,
};

InfoItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default AboutSection;
