import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Style: Uppercase, bold, white text. Active = Cyan Blue.
  const navClass = ({ isActive }) =>
    isActive
      ? "text-cyan-400 font-bold text-sm tracking-wide uppercase px-3 py-2" 
      : "text-white hover:text-cyan-400 font-bold text-sm tracking-wide uppercase px-3 py-2 transition-colors"; 

  return (
    <nav className="bg-[#050A15] border-b border-[#1f2937] sticky top-0 z-50">
      <div className="container px-6 mx-auto">
        <div className="flex items-center justify-between h-20">
          
          {/* 1. LOGO */}
          <Link to="/" className="text-3xl font-black tracking-wider text-white">
            <span className="text-cyan-400">P</span>ASINDU.
          </Link>

          {/* 2. CENTER NAVIGATION (Desktop) */}
          <div className="hidden space-x-8 lg:flex">
            <NavLink to="/" className={navClass}>Home</NavLink>
            <NavLink to="/about" className={navClass}>About</NavLink>
            <NavLink to="/resume" className={navClass}>Resume</NavLink>
            <NavLink to="/projects" className={navClass}>Projects</NavLink>
            <NavLink to="/blog" className={navClass}>Blog</NavLink>
            <NavLink to="/contact" className={navClass}>Contact</NavLink>
          </div>

          {/* 3. RIGHT SIDE: Click-to-Call Phone Number (UPDATED) */}
          <a 
            href="tel:+94740915987" 
            className="items-center hidden gap-3 font-bold tracking-wide text-white transition-colors lg:flex hover:text-cyan-400"
          >
            <Phone size={18} className="fill-current" />
            <span>+94 740915987</span>
          </a>

          {/* Mobile Menu Button */}
          <button 
            className="text-white lg:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden flex flex-col pb-6 bg-[#050A15] border-t border-[#1f2937]">
            <NavLink to="/" className={navClass} onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to="/about" className={navClass} onClick={() => setIsOpen(false)}>About</NavLink>
            <NavLink to="/resume" className={navClass} onClick={() => setIsOpen(false)}>Resume</NavLink>
            <NavLink to="/projects" className={navClass} onClick={() => setIsOpen(false)}>Projects</NavLink>
            <NavLink to="/blog" className={navClass} onClick={() => setIsOpen(false)}>Blog</NavLink>
            <NavLink to="/contact" className={navClass} onClick={() => setIsOpen(false)}>Contact</NavLink>
            
            {/* Phone in Mobile Menu (UPDATED) */}
            <a 
              href="tel:+94740915987"
              className="flex items-center gap-2 px-3 py-4 mt-2 font-bold text-white transition-colors border-t border-gray-800 hover:text-cyan-400"
            >
              <Phone size={16} /> +94 740915987
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;