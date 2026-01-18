import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Preloader from './components/ui/Preloader';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import ComingSoon from './pages/ComingSoon';
import Skills from './pages/Skills'; 

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Show Preloader while loading
  if (isLoading) {
    return <Preloader onComplete={() => setIsLoading(false)} />;
  }

  // Render app with global background
  return (
    <div className="relative flex flex-col min-h-screen text-white selection:bg-cyan-400 selection:text-black">
      
      {/* Fixed Global Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-20">
        <div 
          className="absolute inset-0 bg-center bg-no-repeat bg-cover animate-float" 
          style={{ backgroundImage: "url('/background_img.jpg')" }}
        ></div>
      </div>

      {/* Dark Overlay */}
      <div className="fixed inset-0 -z-10 bg-[#050A15]/80 pointer-events-none"></div>

      <Navbar />
      <main className="container flex-grow px-6 py-12 mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}/>
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;