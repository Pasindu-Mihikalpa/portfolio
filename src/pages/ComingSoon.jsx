import { Link } from 'react-router-dom';
import { Construction } from 'lucide-react';

export default function ComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
      <Construction size={80} className="text-gold animate-bounce" />
      
      <h1 className="text-4xl font-bold text-white">Work in Progress</h1>
      
      <p className="text-gray-400 max-w-md text-lg">
        I am currently working on this project. It will be live very soon. 
        Stay tuned!
      </p>

      <Link 
        to="/projects" 
        className="px-8 py-3 bg-[#191919] border border-gray-600 rounded-full hover:border-gold hover:text-gold transition-all"
      >
        Back to Portfolio
      </Link>
    </div>
  );
}