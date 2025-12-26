import { Github, Linkedin, Mail, X, Facebook, Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-card border-t border-[#222] py-8 mt-auto">
      <div className="container flex flex-col items-center justify-between gap-4 px-6 mx-auto md:flex-row">
        
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} <span className="text-white">Pasindu Mihikalpa</span>. All rights reserved.
        </p>

        {/* Social Media Links */}
        <div className="flex gap-6">
          <a href="https://github.com/Pasindu-Mihikalpa" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors hover:text-cyan-400">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/pasindu-mihikalpa/" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors hover:text-cyan-400">
            <Linkedin size={20} />
          </a>
          <a href="https://x.com/PMihikalpa" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors hover:text-cyan-400">
            <X size={20} />
          </a>
          <a href="https://www.facebook.com/share/1D9kzF3Rcs/" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors hover:text-cyan-400">
            <Facebook size={20} />
          </a>
          <a href="https://www.instagram.com/pasindu_mihikalpa?igsh=eDA2bGpncHc4ZWMy" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors hover:text-cyan-400">
            <Instagram size={20} />
          </a>
          <a href="https://wa.me/94740915987" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors hover:text-cyan-400">
            <MessageCircle size={20} />
          </a>
          <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" className="text-gray-400 transition-colors hover:text-cyan-400">
            <Mail size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
}