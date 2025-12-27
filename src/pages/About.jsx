import { Download } from 'lucide-react';
import Button from '../components/ui/Button';
import PropTypes from 'prop-types';
import myProfile2 from '../assets/my_profile_2.png';

export default function About() {
  return (
    <div className="py-12 animate-fade-in-up">
      <div className="container px-6 mx-auto">
        
        {/* Section Header with "Background Text" Effect */}
        <div className="relative mb-16 text-center">
          <h1 className="relative z-10 inline-block text-4xl font-bold text-white md:text-5xl">
            ABOUT ME
            {/* Cyan Underline */}
            <span className="block w-full h-1 mt-2 rounded-full bg-cyan-400"></span>
          </h1>
          {/* Faint Background Text */}
          <span className="absolute z-0 text-6xl font-bold text-gray-800 -translate-x-1/2 -translate-y-1/2 select-none top-1/2 left-1/2 md:text-8xl opacity-20 whitespace-nowrap">
            ABOUT ME
          </span>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-12">
          
          {/* Left Column: Image */}
          <div className="flex justify-center md:col-span-5">
            <div className="relative">
              {/* Image Frame/Border Effect */}
              <div className="border-4 border-[#1f2937] p-1 bg-dark shadow-2xl rounded-sm">
                <img 
                  src={myProfile2}
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
                Hi There! I'm Pasindu Mihikalpa
              </h2>
              <p className="text-lg font-medium text-cyan-400">
                Business Intelligence | Data Science | Artificial Intelligence
              </p>
            </div>

            <p className="leading-relaxed text-gray-400">
              "I am an aspiring Data Analyst and Developer with a passion for uncovering insights and building interactive solutions. While early in my career, I am dedicated to mastering Business Intelligence, AI, and Data Science. I also have a creative side, enjoying Logo Design and UI principles to make complex data visually compelling."
            </p>

            {/* Personal Info Grid */}
            <div className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-2">
              <InfoItem label="Birthday" value="May 04, 2001" />
              <InfoItem label="Phone" value="+94 74 091 5987" />
              <InfoItem label="Email" value="pmihikalpa2022@gmail.com" />
              <InfoItem label="From" value="Sri Lanka" />
              <InfoItem label="Language" value="English, Sinhala" />
            </div>

            {/* Download CV Button */}
            <div className="pt-6">
              <Button variant="outline" href="/path-to-your-cv.pdf">
                Download CV <Download size={20} />
              </Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// Helper Component for the Info List
const InfoItem = ({ label, value }) => (
  <div className="flex items-center gap-2">
    <span className="w-24 font-semibold text-white">{label}</span>
    <span className="text-white">:</span>
    <span className="text-gray-400">{value}</span>
  </div>
);

InfoItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};